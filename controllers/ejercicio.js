let numeros = [15, 20, 16, 18, 17];
let max = 0;
let min = Math.min(...numeros);

numeros.map(num => {
    max = (num < max) ? max : num;
});

//console.log(Math.max(...numeros));
console.log(min);
console.log(max);

let random = Math.round(Math.random() * (max - min) + min);
console.log(random);