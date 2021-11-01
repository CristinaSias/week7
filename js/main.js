document.addEventListener('DOMContentLoaded', function (event) {
  document
    .getElementById('myform')
    .addEventListener('submit', function (event) {
      event.preventDefault()
      var error_msg = document.getElementById('error_msg')
      error_msg.style.padding = '5px'
      var name = document.getElementById('name').value
      var email = document.getElementById('email').value
      var message = document.getElementById('message').value
      var isValid = validation(email, name)

      if (isValid) {
        var form_wrapper = document.getElementById('form_wrapper')
        form_wrapper.style.display = 'none'

        var confirmation = document.getElementById('confirmation')
        confirmation.innerHTML =
          name +
          ', thank you for your details. We will be in touch via ' +
          email +
          ' shortly'
      } else {
        error_msg.innerHTML = 'Enter a valid email and name'
      }
    })
})

function validation(email, name) {
  if (name.length < 3 || email.length < 6) {
    return false
  } else {
    return true
  }
}
