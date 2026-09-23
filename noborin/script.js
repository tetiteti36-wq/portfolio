/**
 * のぼりん オフィシャルサイト - script.js
 * 四万十町十和マスコットキャラクター 公式ポータル
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
});

// ─── モバイルナビゲーション開閉 ───
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('headerNav');

  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    nav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('open');
      nav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── スムーズスクロール ───
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.getElementById('siteHeader')?.offsetHeight || 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
    });
  });
}
