/* ============================================================
   shewag-secops.online | Components (nav + footer injection)
   ============================================================ */

function getRelPath() {
  // determine depth from root
  const parts = window.location.pathname.split('/').filter(Boolean);
  // If we're in /labs/ or similar sub-folder, prefix with ../
  const isSubPage = parts.length > 1 && !parts[parts.length - 1].includes('.') === false && parts.length >= 2;
  return isSubPage ? '../' : '';
}

function injectNav() {
  const r = getRelPath();
  const html = `
<nav>
  <div class="container nav-inner">
    <a href="${r}index.html" class="nav-logo">
      <div class="logo-icon">🛡</div>
      <div class="logo-text">shewag<span>-secops</span></div>
    </a>
    <div class="nav-links">
      <a href="${r}index.html">Home</a>
      <a href="${r}labs.html">Labs</a>
      <a href="${r}blog.html">Blog</a>
      <a href="${r}about.html">About</a>
      <a href="${r}contact.html">Contact</a>
      <a href="${r}labs.html" class="btn-nav-cta">Start Training</a>
    </div>
    <div class="hamburger" aria-label="Menu" role="button">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}

function injectFooter() {
  const r = getRelPath();
  const year = new Date().getFullYear();
  const html = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${r}index.html" class="nav-logo">
          <div class="logo-icon">🛡</div>
          <div class="logo-text">shewag<span>-secops</span></div>
        </a>
        <p>Hands-on Blue Team & SOC training labs. Free, practical, and built for real defenders.</p>
      </div>
      <div class="footer-col">
        <h4>Labs</h4>
        <ul>
          <li><a href="${r}labs/soc-alert-triage.html">SOC Alert Triage</a></li>
          <li><a href="${r}labs/rdp-brute-force.html">RDP Brute Force</a></li>
          <li><a href="${r}labs/suspicious-powershell.html">Suspicious PowerShell</a></li>
          <li><a href="${r}labs.html">All Labs →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Platform</h4>
        <ul>
          <li><a href="${r}about.html">About</a></li>
          <li><a href="${r}blog.html">Blog / Writeups</a></li>
          <li><a href="${r}contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://github.com/shewag-secops" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://twitter.com/shewag_secops" target="_blank" rel="noopener">Twitter / X</a></li>
          <li><a href="https://linkedin.com/in/shewag" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} shewag-secops.online — Built for defenders, by a defender.</p>
      <div class="status">All systems operational</div>
    </div>
  </div>
</footer>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// Auto-inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
