/**--------------------/*
 * Alterar select
 /**--------------------*/
var menuLista = document.querySelector('#menu-prueba');



/**--------------------/*
 * Objeto Literal
 /**--------------------*/
// const persona = {
//     nombre: 'Bruno',
//     profesion: 'Es un gato',
//     edad: '2 años y medio'
// }
// console.log(persona);

/**--------------------/*
 * Objeto constructor
 /**--------------------*/

function Persona(nombre, profesion, edad) {

    this.nombre = nombre;
    this.profesion = profesion;
    this.edad = edad;
}

// const personaCreada1 = new Persona('Lizzie', 'También es un gato', '3 años');
// console.log(personaCreada1);

/**--------------------/*
 * Prototype
 /**--------------------*/

 
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia   = urgencia;
}
    
Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender javascript y react', 'Urgente');
// console.log(tarea1);
// console.log(tarea1.mostrarInformacionTarea());

/**--------------------/*
 * Object Destructurin
 /**--------------------*/

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: [
        'ReactJS',
        'VueJS',
        'AngularJS'
    ]
}
// Destructuring es extraer valores de un objeto

console.log(aprendiendoJS);

// Version anterior
// let version = aprendiendoJS.version.nueva;
// console.log(version);

// Version nueva
let {anterior} = aprendiendoJS.version;
// console.log(anterior);

/**--------------------/*
* Object literal enhacement
/**--------------------*/
 const banda = 'Metallica';
 const genero = 'Heavy Metal';
 const canciones = ['Mater of puppets', 'Seek and Destroy', 'Enter Sandman'];

//  Version anterior
//  const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
//  }

// Nueva version

const metallica = {banda, genero, canciones};

// console.log(metallica);


/**--------------------/*
* Metodos/Funciones en un objeto
/**--------------------*/
const persona = {
    nombre: 'Kenny',
    trabajo: 'Programador',
    edad: 26,
    rockero: true,
    mostrarInformacion() {
        console.log(`${this.nombre} en un ${this.trabajo} y su edad es de ${this.edad}`);
    }
}
// persona.mostrarInformacion();

/**--------------------/*
* Arreglos y map
/**--------------------*/

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito);

const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})
appContenedor.innerHTML = `<ul>${html}</ul>`;

/**--------------------/*
* Object.keys
/**--------------------*/
const personsObjectKey = {
    nombre: 'Kenny',
    profesion: 'Programador',
    edad: 500
}
console.log(Object.keys(personsObjectKey));