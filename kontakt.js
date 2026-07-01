const form = document.querySelector('#kontaktForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const nachricht = document.querySelector('#nachricht').value;

  console.log('Kontaktanfrage:', { name, email, nachricht });
  alert('Danke für Ihre Nachricht!');
  form.reset();
});
