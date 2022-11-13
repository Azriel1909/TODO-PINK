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
  const valor = input.value
  const lista = document.querySelector('[data-list]')
  const tarea = document.createElement('li')
  tarea.classList.add('card')
  input.value= ''
  // Backticks
  const contenido = `
    <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${valor}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
  ` // HTML + JS
  tarea.innerHTML = contenido
  lista.appendChild(tarea) // Agregamos un hijo al elemento padre
  console.log(contenido)
}
console.log(btn)

// Todo es un objeto dentro de nuestro navegador que tienen métodos para realizar una acción


btn.addEventListener('click', crearTarea);


