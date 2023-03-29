const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting normally

  // get form data
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const message = document.querySelector('#message').value.trim();

  // create mailto link
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`);
  const mailtoLink = `mailto:shantanuss789@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hey there! \n \n ${message} \n \n Name: ${name} \n Email: ${email}`)}`;

  // open email client
  window.location.href = mailtoLink;
});
