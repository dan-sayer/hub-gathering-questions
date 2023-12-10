const scriptURL = 'https://script.google.com/macros/s/AKfycbxxmIHOo6ThHNIsJrgzILMGZIerLXbDMQXaekl1xfa5MiDwJI_X2qc_lFvd9nPZ1HHX_g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})