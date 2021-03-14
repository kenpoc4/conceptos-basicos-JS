// Objeto literal

const persona = {
    nombre: 'Bruno',
    profesion: 'Es un gato',
    edad: '2 años y medio'
}
// console.log(persona);

// Objeto constructor

function Persona(nombre, profesion, edad) {

    this.nombre = nombre;
    this.profesion = profesion;
    this.edad = edad;
}

const personaCreada1 = new Persona('Lizzie', 'También es un gato', '3 años');
// console.log(personaCreada1);