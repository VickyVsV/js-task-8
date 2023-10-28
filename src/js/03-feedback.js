import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('input[name=email]'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';
let localValue;

onCheckForm();
refs.form.addEventListener('input', handleEmail);
refs.form.addEventListener("submit", handleSubmit);

function handleEmail(e){
  console.log(e.target.value);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  }));
}

function handleSubmit(event) {
  event.preventDefault();
  localValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const {
    elements: { email, message }
  } = e.currentTarget;

  console.log(localValue);
  
}

function onCheckForm() {
  localValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  //console.log(localValue);
  if (localValue) {
    refs.form.elements.email.value = localValue.email;
    refs.form.elements.message.value = localValue.message;
  }
}