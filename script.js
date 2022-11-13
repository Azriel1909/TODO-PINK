import checkCompletado from './components/checkCompletado.js'
import eliminarIcon from './components/eliminarIcono.js';

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
  // Los appendChilds se agregan en orden, lo lee de arriba hacia abajo
  const tareaContenido = document.createElement('div') 
  tareaContenido.appendChild(checkCompletado())
  const tareatitulo = document.createElement('span')
  tareatitulo.classList.add('task')
  tareatitulo.innerText = valor
  tareaContenido.appendChild(tareatitulo)
  // Backticks
  const contenido = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
  ` // HTML + JS
  // tarea.innerHTML = contenido
  tarea.appendChild(tareaContenido)
  tarea.appendChild(eliminarIcon())
  lista.appendChild(tarea) // Agregamos un hijo al elemento padre
}

// Todo es un objeto dentro de nuestro navegador que tienen métodos para realizar una acción

btn.addEventListener('click', crearTarea);


