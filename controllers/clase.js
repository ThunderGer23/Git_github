const alumnosDeClase = ['Karly', 'Erick', 'Doc', 'Bryan', 'David', 'Melissa'];
let long = alumnosDeClase.length;
//console.log(long);

alumnosDeClase.push('Leticia');
alumnosDeClase.unshift('Mike');
alumnosDeClase.push('Aramis');
alumnosDeClase.push('Erick');
alumnosDeClase.push('Claud');
let index = alumnosDeClase.indexOf('Doc');
let borrados = alumnosDeClase.splice(2, 3);
let borrado = alumnosDeClase.pop();
//console.table({ alumnosDeClase, borrados, borrado });

/*alumnosDeClase.forEach((element, id, arr) => {
    console.log({ element, id, arr })
})*/

/*  Objetos Literales */

const alumnos = {
    nombre: ['Aramis', 'Mike', 'Leticia'],
    alias: 'El cantante',
    vivo: true,
    'estado-civil': 'soltero',
    edad: 22,
    'instrumentos-musicales': {
        guitarra: false,
        piano: true,
        flauta: false,
        bajo: true
    },
    'generos-musicales': ['Salsa', 'Mariachi'],
    direccion: {
        cp: '53100',
        calle: 'Toluca',
        colonia: 'Ecatepec'
    },
    function(nombre) {
        return `Hola ${nombre}`;
    }
}
console.log(alumnos.function('Claud'));
console.log(alumnos.nombre[1]);
console.log(alumnos.nombre.length);

delete alumnos.vivo;
alumnos.semestre = 'Quinto semestre';
alumnos.direccion.colonia = ['Tecamac', 'Neza', 'Lima'];

//console.log(Object.entries(alumnos));

const atributos = Object.getOwnPropertyNames(alumnos);
const valores = Object.values(alumnos);

console.table({ atributos, valores });