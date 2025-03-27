window.addEventListener("load", function() {
  const form = document.getElementById('contact-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thanks you! Your form was submitted sucessfully and we will be in contact with you soon.");
      form.reset();
    })
    .catch(error => console.error('Error submitting your form, please try again.', error))
  });
});