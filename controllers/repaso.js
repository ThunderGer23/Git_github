let V = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i <= V.length; i++) {
    console.log(V(i));
}


//Valores y referencia
let a = 10;
let b = a;

a = 15;

console.log({ a, b });

let Claudio = {
    edad: '35',
    empleo: 'Maistro',
    ocupacion: 'ninguna'
};

let Karly = {...Claudio };

console.log({ Claudio, Karly });

//Con arreglos pasa exactamente igual
const alumnos = ['Karly', 'Mike', 'Bryan', 'Claudio', 'Leticia'];

const masAlumnos = alumnos;

masAlumnos.push('Erick');
masAlumnos.push('Erick2');
masAlumnos.push('Doc');
masAlumnos.push('Melissa');

console.table({ alumnos, masAlumnos });

console.time('slice');
const otrosalumnos = alumnos.slice();
console.time('slice');

console.time('spread');
const otrosalumnos = [...alumnos];
console.time('spread');

// condiciones de control :4

let fecha = new Date();
let dia = fecha.getDay();

console.log({ dia });

if (dia == 0) {
    console.log('Es domingo');
} else {
    console.log('No es domingo');
}