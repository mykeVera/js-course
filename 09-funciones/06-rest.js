// function suma(a, b, ...rest) { // rest always the last
//   console.log(rest);
// }

const suma = (a, b, ...rest) => { // rest always the last
  console.log(rest);
};

// suma(1, 2, 3, 4, 5, 6);

const logMsg = (desc, ...msgs) => {
    for(let msg of msgs) {
        console.log(desc, msg);
    }
}

// logMsg('Servidor:', 'Error 1', 'Petición aceptada', 'Socket activo');
let mensajes = ['Error 1', 'Petición aceptada', 'Socket activo']
logMsg('CLiente móvil:', ...mensajes, 'Otro error'); // with spread operator, you can put more parameters later