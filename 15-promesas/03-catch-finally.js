let promesa1 = new Promise((res, rej) => {
    rej(12);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1
    .then(valor => {
        if (valor > 10) {
            return promesa2;
        }
    })
    .then(valor2 => {
        console.log('Segunda Promesa');
        return valor2;
    })
    .catch(e => console.log(e)) 
    .finally(() => console.log('Acá estamos en FINALLY')); 

// NOTA:
// Captura cualquier error en la cadena de promesas
// Siempre se ejecuta al final, haya habido error o no