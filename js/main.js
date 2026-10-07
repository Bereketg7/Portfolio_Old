/* ==========================================================================
   main.js — small, dependency-free enhancements
   --------------------------------------------------------------------------
   1. Light / dark theme toggle (remembered in localStorage)
   2. Navbar: shrink on scroll + amber scroll-progress line
   3. Close the mobile menu after a link is tapped
   4. Fade-in on scroll with a short stagger (off for reduced motion)
   5. Project filter
   6. Copy email button
   7. Contact form: validation + Formspree submit (mailto fallback)
   8. Footer year
   Everything sits inside one function so nothing leaks into global scope.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Theme toggle ---------- */
  var toggle = document.getElementById('themeToggle');

  // Show the icon for the mode you'll switch TO, and keep the label accurate
  function syncToggle(theme) {
    if (!toggle) return;
    var next = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    toggle.innerHTML = '<i class="bi ' + (theme === 'dark' ? 'bi-sun' : 'bi-moon-stars') + '" aria-hidden="true"></i>';
  }

  function setTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* private browsing: ignore */ }
    syncToggle(theme);
  }

  syncToggle(root.getAttribute('data-bs-theme') || 'dark');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      if (reduceMotion) { setTheme(next); return; }
      toggle.classList.add('is-turning');            // icon rotates (see .btn-icon in style.css)
      setTimeout(function () {
        setTheme(next);
        toggle.classList.remove('is-turning');
      }, 150);
    });
  }

  /* ---------- 2. Navbar shrink + scroll progress ---------- */
  var nav = document.getElementById('mainNav');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle('is-scrolled', y > 24);
    nav.style.setProperty('--progress', max > 0 ? Math.min(y / max, 1).toFixed(4) : 0);
    ticking = false;
  }

  if (nav) {
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }   // at most once per frame
    }, { passive: true });
    onScroll();
  }

  /* ---------- 3. Close the mobile menu after a link is tapped ---------- */
  var navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('show') && window.bootstrap) {
          window.bootstrap.Collapse.getOrCreateInstance(navLinks).hide();
        }
      });
    });
    // Esc closes the open mobile menu and returns focus to the hamburger
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(navLinks).hide();
        var toggler = document.querySelector('.navbar-toggler');
        if (toggler) toggler.focus();
      }
    });
  }

  /* ---------- 4. Fade-in on scroll ---------- */
  // Stagger: inside a .stagger row, children fade in 60ms apart (max 4 steps)
  document.querySelectorAll('.stagger').forEach(function (group) {
    group.querySelectorAll(':scope > .reveal').forEach(function (el, i) {
      el.style.setProperty('--delay', Math.min(i, 3) * 60 + 'ms');
    });
  });

  var revealEls = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);          // animate once only
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 5. Project filter ---------- */
  var filterButtons = document.querySelectorAll('.btn-filter');
  var projects = document.querySelectorAll('.project-item');
  var filterStatus = document.getElementById('filterStatus');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      var shown = 0;

      filterButtons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));   // styling keys off aria-pressed
      });

      projects.forEach(function (card) {
        var cats = (card.getAttribute('data-category') || '').split(/\s+/);
        var match = filter === 'all' || cats.indexOf(filter) !== -1;
        card.classList.toggle('d-none', !match);
        if (match) { shown++; card.classList.add('is-visible'); }
      });

      if (filterStatus) {
        filterStatus.textContent = 'Showing ' + shown + ' project' + (shown === 1 ? '' : 's') + '.';
      }
    });
  });

  /* ---------- 6. Copy email ---------- */
  var copyBtn = document.getElementById('copyEmail');
  var copyStatus = document.getElementById('copyStatus');

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      var done = function () {
        copyStatus.textContent = 'Email copied to clipboard.';
        copyBtn.innerHTML = '<i class="bi bi-check2" aria-hidden="true"></i>';
        setTimeout(function () {
          copyStatus.textContent = '';
          copyBtn.innerHTML = '<i class="bi bi-copy" aria-hidden="true"></i>';
        }, 2500);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(done, function () {
          copyStatus.textContent = 'Copy failed. The address is: ' + email;
        });
      } else {
        copyStatus.textContent = 'Copy not available here. The address is: ' + email;
      }
    });
  }

  /* ---------- 7. Contact form ---------- */
  var form = document.getElementById('contactForm');
  var statusBox = document.getElementById('formStatus');
  var submitBtn = document.getElementById('submitBtn');

  function showStatus(message, type) {
    var icon = type === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle';
    statusBox.className = 'form-status is-' + type;
    statusBox.innerHTML = '<i class="bi ' + icon + '" aria-hidden="true"></i><span></span>';
    statusBox.querySelector('span').textContent = message;   // textContent = safe from HTML injection
  }

  // Keep aria-invalid in sync so screen readers announce errors
  function markFields() {
    form.querySelectorAll('.form-control').forEach(function (field) {
      field.setAttribute('aria-invalid', String(!field.checkValidity()));
    });
  }

  if (form) {
    form.addEventListener('input', function () {
      if (form.classList.contains('was-validated')) markFields();
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');        // Bootstrap shows the messages
        markFields();
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();     // take the user to the first problem
        return;
      }

      var action = form.getAttribute('action') || '';
      var data = new FormData(form);
      var fallbackEmail = form.getAttribute('data-fallback-email');

      // No Formspree ID yet → open the visitor's email app instead
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        var body = 'From: ' + data.get('name') + ' <' + data.get('email') + '>\n\n' + data.get('message');
        window.location.href = 'mailto:' + fallbackEmail +
          '?subject=' + encodeURIComponent(data.get('subject')) +
          '&body=' + encodeURIComponent(body);
        showStatus('Opening your email app to send the message…', 'success');
        return;
      }

      // Send to Formspree without reloading the page
      var label = submitBtn.querySelector('.btn-label');
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      if (label) label.textContent = 'Sending…';

      fetch(action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed');
          form.reset();
          form.classList.remove('was-validated');
          form.querySelectorAll('[aria-invalid]').forEach(function (f) { f.removeAttribute('aria-invalid'); });
          showStatus('Thanks! Your message was sent. I\'ll reply within 48 hours.', 'success');
        })
        .catch(function () {
          showStatus('Sorry, something went wrong. Please email me at ' + fallbackEmail + '.', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.removeAttribute('aria-busy');
          if (label) label.textContent = 'Send message';
        });
    });
  }

  /* ---------- 8. Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
