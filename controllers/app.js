/*
    Tipos de datos

Existen 7 tipos de datos fundamentales, por el momento solo vamos a ver 3 :3
*/

let num = 5;
let Pi = 3.14;
let Euler = 2.7516;
console.log(Pi);
if (Pi > 2) {
    let Pi = 3;
    console.log(Pi);
}
console.log(Pi);

if (num == 5) {
    console.log("El valor de num es igual a :", num);
}

var prueba = "Holi no hagan esto jamás plox";
console.log("Variable de prueba fuera del bloque", prueba); {
    var prueba = "ya ven porque?";
    console.log("Variable de prueba dentro del bloque", prueba);
}
console.log("Variable de prueba luego del bloque", prueba);

console.log(typeof prueba);

//  Función en js

function ejemplo() {
    console.log('Hola');
}

ejemplo('gerardo', 24);
//ejemplo("Gerardo", 24);

//  Función anonima

const ejemplo2 = function() {
    console.log('Hola');
}

const ejemplo3 = () => {
    console.log(arguments);
    console.log('Hola');
}


const ejemplo4 = (...args) => `Hola ${arguments.nombre}`;

const getAleatorio = () => Math.random();

//  Ejemplos de array

const a = [1, true, false, 'A', 'hola', [1, 1, 2, 5]];

const b = Array.of('yes', 3, 'd', [1, 2, 3]);

const c = Array(20).fill(':3');

const d = new Array();

const e = new Array(1, 2, 3);

const generosMusicales = ['Rock', 'Salsa', 'Electronica'];
generosMusicales.push("Pop");
generosMusicales.unshift('Banda');
generosMusicales.pop();
generosMusicales.splice(1, 1);
let find = generosMusicales.indexOf('Rock');
generosMusicales.forEach((element, id, arr) => {
    console.log({ element, id, arr });
});


console.log(generosMusicales.reverse());

//  Objetos literales Diccionarios de python

let avengers = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: 118.70
    },
    trajes: ['Mark I', 'Mark VII', 'Mark LII'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    function(a) {
        if (a > 0) {
            console.log('Vengadores Unidos');
        }
    }
}

console.log(avengers.function(1));
console.log('edad: ', avengers['edad']);
console.log('numero de trajes: ', avengers.trajes.length);
delete avengers.edad;

//convertir a arreglo
const entriesPares = Object.entries(avengers);
console.log(entriesPares);

//bloquear atributos del object
Object.freeze(avengers);
avengers.poder = 'Dinero :v';

avengers.direccion.ubicacion = 'Hulk';
//Bloquea atributos directos pero no los secundarios

//Podemos separar propiedades de valores con los metodos siguientes

const propiedades = Object.getOwnPropertyNames(avengers);

const valor = Object.values(avengers);

console.log({ propiedades, valor });