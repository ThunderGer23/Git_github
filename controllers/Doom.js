'use strict';

let Div = document.getElementById('D');
Div.innerHTML = 'Hola mundo';
Div.style.textAlign = 'center';
Div.style.fontSize = '5em';

let Parra = document.getElementsByClassName('parrafo');
Parra[0].innerHTML = 'Karly';
Parra[1].innerHTML = 'David';
Parra[2].innerHTML = 'Mike';

console.log(globalThis.innerHeight);
console.log(globalThis.innerWidth);
console.log(globalThis.location);
console.log(screen.height);
console.log(screen.width)