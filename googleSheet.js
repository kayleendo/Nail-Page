const scriptURL = 'https://script.google.com/macros/s/AKfycbwCDEhK_c1wluaiSkPOmlFyoRGhBAuHooWB7NtA4DtHMv-Uh0Ie3ijmuAh8fQXGyC0Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})