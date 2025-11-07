// Ejemplo de promesas encadenadas con argumentos

let promesa1 = (user) => new Promise((res, rej) => {
    res(user);
});

let promesa2 = (user) => new Promise((res, rej) => {
    res(user + ', Hola Mundo');
});

promesa1('Juana')
    .then((user) => promesa2(user))
    .then((dato) => console.log(dato));

