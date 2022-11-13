const btn = document.querySelector('[data-from-btn]')
// Data attributes

// Listener
// btn.addEventListener('click',function(evento) {
//   evento.preventDefault()
//   const input = document.querySelector('[data-from-input]')
//   console.log(input.value)
// });

// Preserve Log

// Ahora seleccionamos nuestro input

// Evitar que se recargue la página cuando se envían datos con evento.preventDefault()

// ! Arrow functions o funciones anónimas 
const crearTarea = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-from-input]')
  console.log(input.value)
}
console.log(btn)

// Todo es un objeto dentro de nuestro navegador que tienen métodos para realizar una acción


btn.addEventListener('click', crearTarea);


