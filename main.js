//
//
//
// El primer enlace te lleva a la pagina


//Segundo enlace 


const anular = document.getElementById("enlace-anulado")


anular.addEventListener("click", (e) => {
    e.preventDefault()

    parrafo.textContent = "enlace anulado !!!!!";
    parrafo.style.color = "red";
})

const boton = document.getElementById("btn")
const parrafo = document.getElementById("parrafo")





//
// Distinta forma de seleccionar el elemento del HTML ( con querySelector) -     forma mas moderna de llamarlos
// document.querySelector("p") - te llama un solo elemento
// document.querySelectorAll("p") -  te llama todos los elementos
// const parrafo = document.querySelector("p")
// const parrafo = document.querySelector("#parrafo")
// const parrafo = document.getElementById("parrafo")



// const boton = document.getElementById("btn")


// const escribir = () => {
//     let texto = prompt("que quieres escribir")
//     parrafo.textContent = texto
// }

// PRimera forma de escuchar al evento (forma mas personalizable)
// SELECTOr -> METODO(EVENTO,FUNCION)   ->
// boton.addEventListener("click", () => {
//     escribir()
// })


// Segunda forma de escuchar un evento resumida y mas moderna
// boton.onclick = () => { escribir() }

// Ejemplos eventos del mouse

// boton.addEventListener("click", () => {
// console.log("a")
// })



// boton.addEventListener("mouseover", () => {
//     console.log("a")
//     })
//Se activa cuando el cursor para por arriba del boton


// boton.addEventListener("mouseout", () => {
//     console.log("a")
//     })    

//se activa cuando el cursor sale del boton


// boton.addEventListener("mousemove", () => {
//     console.log("a")
//     })    

// // 


// Evento CHANGE
//Cuando cambia el valor de un elemento se activa

// const input = document.getElementById("texto")

// input.addEventListener("change", () => {
//     console.log("cambio el valor del texto");
// })


// Si el boton está dentro del formulario el boton tiene el evento submit, si le doy click al boton, envia la informacion



// Anular el evento

// boton.addEventListener("click", (e) => {
//     e.preventDefault()

//     console.log(input.value);
// })

// cuando enviamos la informacion, se recarga la pagina.
// con este evento le estamos diciendo que no lo haga, entonces no envia la info y no recarga la pag.