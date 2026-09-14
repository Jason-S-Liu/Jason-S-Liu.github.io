(() => {
  const root = document.documentElement;
  const system = matchMedia('(prefers-color-scheme: dark)');
  let chosen = null;
  try { chosen = localStorage.getItem('site-theme'); } catch {}
  if (!['light', 'dark'].includes(chosen)) chosen = null;
  function apply(theme) {
    root.dataset.theme = theme;
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const dark = theme === 'dark';
    const zh = root.lang.startsWith('zh');
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', zh ? (dark ? '切换至浅色模式' : '切换至深色模式') : (dark ? 'Switch to light mode' : 'Switch to dark mode'));
    button.title = button.getAttribute('aria-label');
  }
  apply(chosen || (system.matches ? 'dark' : 'light'));
  system.addEventListener('change', () => { if (!chosen) apply(system.matches ? 'dark' : 'light'); });
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.addEventListener('click', () => {
        chosen = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('site-theme', chosen); } catch {}
        apply(chosen);
      });
    }
    new MutationObserver(() => apply(root.dataset.theme)).observe(root, {attributes: true, attributeFilter: ['lang']});
    apply(root.dataset.theme);
    const menu = document.querySelector('.blog-menu');
    if (menu) {
      document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
      });
    }
  });
})();
