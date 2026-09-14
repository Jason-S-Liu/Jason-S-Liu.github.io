// Light obfuscation deters simple harvesting; client-side code is not access control.
(() => {
  const contact = document.getElementById('contact-email');
  if (!contact) return;
  const controls = document.querySelectorAll('.email-reveal');
  const encoded = [67, 72, 90, 70, 71, 69, 64, 92, 105, 74, 88, 92, 7, 76, 77, 92, 7, 74, 71];
  const decode = () => encoded.map(value => String.fromCharCode(value ^ 41)).join('');
  const scrambled = document.createElement('span');
  scrambled.className = 'scrambled-email';
  scrambled.textContent = decode().replace(/[a-z]+/gi, part => [...part].reverse().join(''));
  contact.prepend(scrambled, document.createTextNode(' '));
  let revealed = false;
  for (const button of controls) {
    button.hidden = false;
    button.addEventListener('click', () => {
      if (!revealed) {
        const address = decode();
        const link = document.createElement('a');
        link.href = 'mailto:' + address;
        link.textContent = address;
        link.className = 'revealed-email';
        contact.replaceChildren(link);
        revealed = true;
      }
      contact.querySelector('a').focus();
    });
  }
})();
