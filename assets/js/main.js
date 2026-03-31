/* ============================================================
   shewag-secops.online | Main JavaScript
   ============================================================ */

// ── Nav scroll effect ────────────────────────────────────
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Mobile hamburger ─────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  // close on nav link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

// ── Active nav link ──────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── Walkthrough accordion ────────────────────────────────
document.querySelectorAll('.walkthrough-header').forEach(header => {
  header.addEventListener('click', () => {
    const body   = header.nextElementSibling;
    const isOpen = header.classList.contains('open');
    header.classList.toggle('open', !isOpen);
    body.classList.toggle('open', !isOpen);
  });
});

// ── Lab filter ───────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const labCards   = document.querySelectorAll('.lab-card[data-tags]');
if (filterBtns.length && labCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.filter;
      labCards.forEach(card => {
        const tags = card.dataset.tags || '';
        const show = tag === 'all' || tags.includes(tag);
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Blog filter ──────────────────────────────────────────
const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');
const blogCards      = document.querySelectorAll('.blog-card[data-category]');
if (blogFilterBtns.length && blogCards.length) {
  blogFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      blogFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      blogCards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Contact form (formspree or mailto fallback) ──────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'SENDING...';
    btn.disabled = true;

    // Replace YOUR_FORMSPREE_ID with actual ID, or use mailto fallback
    const formspreeId = 'YOUR_FORMSPREE_ID';
    if (formspreeId !== 'YOUR_FORMSPREE_ID') {
      try {
        const data = new FormData(contactForm);
        const res  = await fetch(`https://formspree.io/f/${formspreeId}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (res.ok) {
          showFormSuccess();
        } else {
          mailtoFallback(contactForm);
        }
      } catch {
        mailtoFallback(contactForm);
      }
    } else {
      mailtoFallback(contactForm);
    }
    btn.textContent = orig;
    btn.disabled = false;
  });
}

function showFormSuccess() {
  const form = document.getElementById('contact-form');
  form.innerHTML = `<div style="text-align:center;padding:40px 20px">
    <div style="font-size:2rem;margin-bottom:12px">✅</div>
    <p style="font-family:var(--font-mono);color:var(--green);font-size:1rem">MESSAGE RECEIVED</p>
    <p style="color:var(--text-secondary);margin-top:8px">I'll get back to you soon.</p>
  </div>`;
}
function mailtoFallback(form) {
  const name    = form.querySelector('[name="name"]')?.value || '';
  const subject = form.querySelector('[name="subject"]')?.value || 'Contact from shewag-secops';
  const message = form.querySelector('[name="message"]')?.value || '';
  window.location.href = `mailto:contact@shewag-secops.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
}

// ── Typing animation (hero terminal) ────────────────────
const typingLines = document.querySelectorAll('.type-anim');
if (typingLines.length) {
  typingLines.forEach((el, i) => {
    const text = el.dataset.text || el.textContent;
    el.textContent = '';
    el.style.visibility = 'visible';
    setTimeout(() => {
      let j = 0;
      const interval = setInterval(() => {
        el.textContent += text[j];
        j++;
        if (j >= text.length) clearInterval(interval);
      }, 35);
    }, i * 600 + 400);
  });
}

// ── Intersection Observer for fade-in ───────────────────
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}
