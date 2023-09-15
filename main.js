const scriptURL = 'https://script.google.com/macros/s/AKfycbxO9fIwvLrEgHyk1Xx_xulhmCbZs6KicuYAxcO5e1UnriQlkyEapfHeKkM7rrrJP_HwPA/exec'

const form = document.forms['counselling']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for your interest. You will recieve an email once we see your response." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})