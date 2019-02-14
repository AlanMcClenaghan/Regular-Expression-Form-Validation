// Form Blur Event Listeners
const name = document.getElementById('name')
name.addEventListener('blur', validateName);

const zip = document.getElementById('zip')
zip.addEventListener('blur', validateZip);

const email = document.getElementById('email')
email.addEventListener('blur', validateEmail);

const phone = document.getElementById('phone')
phone.addEventListener('blur', validatePhone);