/* ELEMENTOS RAPIDOS: BUSCAN POR ALGUN INDICE */

// HTMLElement
let htmlElement = document.getElementById("cuerpo");

// HTMLCollection -> Se parece a un array pero no lo es!
let elementosRed = document.getElementsByClassName('red');

// NodeList
let elementosChanchito = document.getElementsByName('chanchito');

// HTMLCollection
let parrafos = document.getElementsByTagName('p');

/* ------------------------------------------------------------- */

/* ELEMENTOS LENTOS: BUSCAN EN TODO EL DOCUMENTO */

// HTMLElement -> Solo un elemento
let el = document.querySelector('#cuerpo');
// NodeList
let els = document.querySelectorAll('p');


// IMPORTANTE:
// HTMLCollection: Refleja cambios en el DOM en tiempo real.
// NodeList: No refleja cambios en el DOM en tiempo real.

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive);   // 5 elementos
console.log(pstatic); // 4 elementos