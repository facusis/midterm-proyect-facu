const contactForm = document.querySelector('#contactForm')
const inputEmail = document.querySelector('#email')
const emailError = document.querySelector('#emailError')

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const { target } = event
  const data = {
    name: target.name.value,
    email: target.email.value
  }
  console.log(data.email)

  function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  if (validarEmail(data.email)) {
    emailError.classList.add('hidden')
    inputEmail.classList.add('input-email')
    alert(`Información enviada con éxito! \n Nombre: ${data.name} \n Email: ${data.email}`)
    contactForm.reset();
    emailError.classList.remove('visible')
  } else {
    emailError.classList.remove('hidden')
    emailError.classList.add('visible')
  }
})