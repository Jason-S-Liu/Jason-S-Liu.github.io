(() => {
  const translations = window.siteTranslations || {};
  if (!translations) return;
  // Cache original content once; avoid replacing interactive containers or citations.
  const entries = Object.entries(translations).flatMap(([selector, zh]) =>
    [...document.querySelectorAll(selector)].map(element => ({element, en: element.innerHTML, zh}))
  );
  for (const element of document.querySelectorAll('[data-zh]')) {
    entries.push({element, en: element.innerHTML, zh: element.dataset.zh});
  }
  const publicationLabels = [...document.querySelectorAll('.paper-links a, .paper-links button, .paper-details summary')]
    .map(element => ({element, en: element.textContent}));
  const labels = {pdf: 'PDF', publisher: '期刊／会议页面', abstract: '摘要', bibtex: 'BibTeX'};
  const switcher = document.querySelector('.language-switch');
  const buttons = switcher.querySelectorAll('button');
  const navigation = document.querySelector('nav');
  const portrait = document.querySelector('.portrait');
  const englishDescription = document.querySelector('meta[name="description"]').content;
  const chineseDescription = document.querySelector('meta[name="description"]').dataset.zh || '刘士杰（Shijie / Jason Liu）——计算流体力学、钝体空气动力学与颗粒两相流研究。';

  const chinesePapers = ['j1', 'j2', 'c1', 'c2', 'c3', 'coal-shed-2024'];
  const englishTitle = document.title;
  function setLanguage(language, save = false) {
    const zh = language === 'zh';
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
    document.title = zh ? (document.body.dataset.titleZh || '刘士杰') : englishTitle;
    for (const id of chinesePapers) {
      for (const element of document.querySelectorAll(`#${id} h4, #${id} .authors, #${id} .venue, #${id} details > p`)) {
        element.lang = zh ? 'zh-CN' : 'en';
      }
    }
    for (const entry of entries) {
      // The email reveal button is intentionally removed after use.
      if (entry.element.isConnected) entry.element.innerHTML = zh ? entry.zh : entry.en;
    }
    for (const {element, en} of publicationLabels) {
      element.textContent = zh ? (labels[en] || en) : en;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    }
    if (navigation) navigation.setAttribute('aria-label', zh ? '主导航' : 'Main navigation');
    if (portrait) portrait.alt = zh ? '刘士杰的个人照片' : 'Portrait of Shijie Liu';
    document.querySelector('meta[name="description"]').content = zh ? chineseDescription : englishDescription;
    if (save) {
      try { localStorage.setItem('site-language', language); } catch { /* Storage may be disabled. */ }
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', language);
        history.replaceState(null, '', url);
      } catch { /* Language switching also works when opened as a local file. */ }
    }
  }

  let preferred = 'en';
  try { preferred = localStorage.getItem('site-language') || 'en'; } catch { /* Default to English. */ }
  const queryLanguage = new URL(location.href).searchParams.get('lang');
  if (queryLanguage === 'en' || queryLanguage === 'zh') preferred = queryLanguage;
  setLanguage(preferred === 'zh' ? 'zh' : 'en');
  for (const button of buttons) button.addEventListener('click', () => setLanguage(button.dataset.language, true));
  switcher.hidden = false;
})();
