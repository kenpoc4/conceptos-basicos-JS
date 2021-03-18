/**--------------------/*
 * Alterar select
 /**--------------------*/
var menuLista = document.querySelector('#menu-prueba');



/**--------------------/*
 * Objeto Literal
 /**--------------------*/
const persona = {
    nombre: 'Bruno',
    profesion: 'Es un gato',
    edad: '2 años y medio'
}
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
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());