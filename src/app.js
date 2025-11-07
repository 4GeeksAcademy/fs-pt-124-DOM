import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


//document ---> html
//para buscar un elemento existente en el html
const byId = document.querySelector('#miH1') // llamamos a un id 
const byClass = document.querySelector('.alert') // llamamos a una clase
const byTag = document.querySelector('h1') // llamamos a una etiqueta 
const body = document.body
const newContent = document.querySelector("#newContent")
const btn = document.querySelector('#mostrar')
const escondido = document.querySelector('.escondido')
const theme = document.querySelector('#theme')


console.log('class', byClass, 'id', byId, 'etiqueta', byTag)

//querySelector 

/*
devuelve segun lo que pidamos un id, clase o etiqueta
devuelve el PRIMERO SOLAMENTE, la primera coincidencia
*/


console.log(document.querySelectorAll('h1'))

console.log(document.querySelector('figure'))// si no existe el elemento, devuelve null o un array vacio si se usa el querySelectorAll


//modificar el contenido de algo que ya existe
//TEXTO, SOLO TEXTO
document.querySelector("#diferencias").innerText = "<span>diferenciado</span>"
//puede incrustar etiquetas html
document.querySelector("#diferencias").innerHTML = "<span>diferenciado</span>"

document.querySelector("#diferencias").innerHTML = "diferenciado"

// puedo usar la variable donde almacene la referencia a la etiqueta y modificarla
byId.innerText = 'maria doloores'





// creando aetiquetas nuevas
//NUNCA, PERO NUNCA, se trabaja en el body directamente
// siempre vamos a crear un contenedor para el contenido

const newContainer = document.createElement('div') // creamos una nueva etiqueta div
newContainer.id = 'nuevoDiv' // le asignamos un id
newContainer.innerText = 'generado desde js'
console.log(newContainer) // mostramos por consola --> opcional
body.appendChild(newContainer) // se lo añadimos al body

const lorem = document.createElement("p")
lorem.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, excepturi. Dolorum quasi provident delectus possimus harum odit incidunt illum qui impedit. Eaque alias iure nobis reiciendis accusantium magnam suscipit dicta?'
newContent.appendChild(lorem)




//generar contenido a partir de un array y loop

const names = ['pepe', 'lola', 'maria', 'matia', 'barbara']

const card = document.createElement('article')
card.classList.add('card')// añadimos una clase

const cardHeader = document.createElement('div')
cardHeader.classList.add('card-header', 'text-black')

const cardTitle = document.createElement('h2')
cardTitle.innerText = 'Names'

cardHeader.appendChild(cardTitle)

card.appendChild(cardHeader)

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

card.appendChild(cardBody)

const ul = document.createElement('ul')

cardBody.appendChild(ul)

// names.forEach(el=>{
//   const li = document.createElement('li')
//   li.innerText = el
//   ul.appendChild(li)
// })

names.map(el => {
  const li = document.createElement('li')
  li.classList.add('list-item', 'text-black')
  li.addEventListener('click', ()=>{
    alert('hiciste click sobre ' + el)
  })
  li.innerText = el
  ul.appendChild(li)
})

// for (let el of names){ 
//      const li = document.createElement('li')
//   li.innerText = el
//   ul.appendChild(li)
// }

// for (let i in names){ 
//      const li = document.createElement('li')
//   li.innerText = names[i]
//   ul.appendChild(li)
// }
body.appendChild(card)
let counter = 0
//eventos
//add event listener recibe evento y funcion (cuandoun evento/metodo ejecuta una funcion como parametro, se le llama callback)

//jugando con el evento y molestando al boton

// btn.addEventListener('click', ()=>{
//   if (counter>10){
//     console.log('ya me estas tocando demasiado')
//   }

//   console.log('dejame en paz')
//   console.log(counter)
//   counter++
// })

btn.addEventListener('click', () => {
  // escondido.classList.remove('escondido') //--> si solo quiero que lo muestre (quitarle la clase escondido)

  //metodo intercambio
  //  if (escondido.classList.contains('escondido')){

  //    return escondido.classList.replace('escondido', 'aLaVista')
  //   }
  //    return escondido.classList.replace( 'aLaVista', 'escondido')

  //metodo quitar y poner las clases

  if (escondido.classList.contains('escondido')) {
    return escondido.classList.remove('escondido')
  }
  return escondido.classList.add('escondido')
})

btn.addEventListener('mouseenter', ()=>{
  console.log('mouseenter')
  alert('interesado!!!!!')
})

btn.addEventListener('mouseout', ()=>{
  console.log('mouseout')
  alert('no te vayas por favor, te queremos!!!!')
})
btn.addEventListener('mouseover', ()=>{
  console.log('mouseover')
})



theme.addEventListener("click", ()=>{
   //metodo intercambio
   if (body.classList.contains('claro')){

     return body.classList.replace('claro', 'oscuro')
    }
     return body.classList.replace( 'oscuro', 'claro')
})