// Light obfuscation to deter simple address harvesting, not access control.
const contact = document.getElementById('contact-email');
const controls = document.querySelectorAll('.email-reveal');
let revealed = false;
for (const button of controls) {
  button.hidden = false;
  button.addEventListener('click', () => {
    if (!revealed) {
      const address = [67, 72, 90, 70, 71, 69, 64, 92, 105, 74, 88, 92, 7, 76, 77, 92, 7, 74, 71].map(value => String.fromCharCode(value ^ 41)).join('');
      const link = document.createElement('a');
      link.href = 'mailto:' + address;
      link.textContent = address.replace('@', ' [AT] ');
      contact.replaceChildren(link);
      revealed = true;
    }
    contact.querySelector('a').focus();
  });
}
