//PASO 1: Crear una clase p objetos y un repositorio p gestionarlos. Instanciar el Repositorio. new Repositorio()
//PASO 2: Capturar el elemento disparador y el elemento contenedor donde se agregarán los nuevos elementos. document.getElementById
//PASO 3: Crear la función cb que se ejecutará cuando el usuario interactue con el elemento disparador 
//PASO 3.1: Capturo y valido elementos del formulario.Generar un ID p/c actividad. getElementById("").value-if()alert-Date.now()
//PASO 3.2: Creo el objeto(llamo al metodo) y creo el Html c/clase y contenido (createElement/classList.add/innerHTML)
//PASO 3.3: Inserto la actividad en el DOM. appendChild
//PASO 3.4: Capturar el form y reset()
//PASO 4: Crear el evento usando addEventListener.

class Activity {
    constructor(id,titulo,descripcion,imgUrl) {
        this.id= id,
        this.titulo= titulo,
        this.descripcion= descripcion,
        this.imgUrl= imgUrl
    }
}

class Repositorio {
    constructor() {
        this.actividades=[]
    }
    listarActividades(){
        return this.actividades
    }
    crearActividad(id,titulo,descripcion,imgUrl){
        const actividad= new Activity (id,titulo,descripcion,imgUrl)
        this.actividades.push(actividad)
        return actividad
    }
}

const repositorio= new Repositorio()

const boton= document.getElementById("boton")
const contenedorDom=document.getElementById("contenedorDom")

function agActividad() {
    const titulo= document.getElementById("actividad").value //1.capturo/valido elementos del formulario(inputs) y genero ID
    const descripcion= document.getElementById("descripcion").value   
    const imgUrl= document.getElementById("imgUrl").value   
    const id= Date.now()

    if(titulo===""||descripcion===""||imgUrl===""){
        alert("Por favor, completa todos los campos")
        return
    }

    const nuevaActividad= repositorio.crearActividad(id,titulo,descripcion,imgUrl) //2.creo el objeto y creo el Html c/clase y contenido
    const nuevoE= document.createElement("div")
    nuevoE.classList.add("tarjeta")
    nuevoE.innerHTML=`
    <h3 class="titulos">${nuevaActividad.titulo}</h3>
    <p class="titulos">${nuevaActividad.descripcion}</p>
    <img src="${nuevaActividad.imgUrl}" class="logo">
    `
    contenedorDom.appendChild(nuevoE) //inserto la actividad en el DOM

    const form = document.querySelector("form") //capturar el form y reset()
    form.reset()
}
boton.addEventListener("click",agActividad)