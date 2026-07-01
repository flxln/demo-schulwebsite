const form = document.querySelector('#kontakt-form');
const errorBox = document.querySelector('#form-error');

function zeigeFehler(text) {
  errorBox.textContent = text;
  errorBox.hidden = false;
}

function verstecktFehler() {
  errorBox.hidden = true;
  errorBox.textContent = '';
}

function istGueltigeEmail(email) {
  const at = email.indexOf('@');
  return at > 0 && email.indexOf('.', at) > at;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const nachricht = document.querySelector('#nachricht').value.trim();

  if (!name) {
    zeigeFehler('Bitte geben Sie Ihren Namen an.');
    return;
  }
  if (!email) {
    zeigeFehler('Bitte geben Sie eine E-Mail-Adresse an.');
    return;
  }
  if (!istGueltigeEmail(email)) {
    zeigeFehler('Bitte geben Sie eine gültige E-Mail-Adresse an.');
    return;
  }
  if (!nachricht) {
    zeigeFehler('Bitte geben Sie eine Nachricht ein.');
    return;
  }

  verstecktFehler();
  console.log('Kontaktanfrage:', { name, email, nachricht });
  alert('Danke für Ihre Nachricht!');
  form.reset();
});
