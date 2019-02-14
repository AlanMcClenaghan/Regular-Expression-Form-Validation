// Form Blur Event Listeners
const name = document.getElementById('name')
name.addEventListener('blur', validateName);

const zip = document.getElementById('zip')
zip.addEventListener('blur', validateZip);

const email = document.getElementById('email')
email.addEventListener('blur', validateEmail);

const phone = document.getElementById('phone')
phone.addEventListener('blur', validatePhone);


// Functions

function validateName() {
  const regEx = /^[A-Za-z]{2,10}$/;
  if (!regEx.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const regEx = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!regEx.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const regEx = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;
  if (!regEx.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const regEx = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!regEx.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}