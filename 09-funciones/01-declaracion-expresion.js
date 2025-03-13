console.log(resta); // Hoisting -> Izar o levantar
// Declaracion de funciones - Function Declaration

// Funcion nombrada -> Named function
function suma() {
    console.log('sumando...')
}

// Funcion anónima -> Anonymous function
// function () {
//     console.log('función anónima')
// }

// Expresión de funciones -> Function expression
const resta = function () { // Anonymous function expression
    console.log('restando...')
}

const multiplica = function multi () { // Named function expression
    console.log('multiplicando...')
}

const divide = () => { // arrow function (always anonymous)
    console.log('dividiendo...')
}