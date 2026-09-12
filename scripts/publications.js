// Keep native details as the no-JavaScript fallback, with inline controls when enhanced.
for (const paper of document.querySelectorAll('.publication')) {
  const links = paper.querySelector('.paper-links');
  for (const [index, details] of [...paper.querySelectorAll('details')].entries()) {
    const summary = details.querySelector('summary');
    const button = document.createElement('button');
    const divider = document.createElement('span');
    details.id = `${paper.id}-details-${index}`;
    button.type = 'button';
    button.textContent = summary.textContent;
    button.setAttribute('aria-controls', details.id);
    button.setAttribute('aria-expanded', String(details.open));
    divider.textContent = ' | ';
    divider.setAttribute('aria-hidden', 'true');
    button.addEventListener('click', () => { details.open = !details.open; });
    details.addEventListener('toggle', () => {
      button.setAttribute('aria-expanded', String(details.open));
    });
    links.append(divider, button);
    summary.hidden = true;
  }
  paper.classList.add('enhanced');
}
