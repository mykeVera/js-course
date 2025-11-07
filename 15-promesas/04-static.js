let promesa1 = new Promise((res, rej) => {
    res(5);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1
    .then(valor => {
        if (valor > 10) {
            return promesa2;
        }
        // return Promise.reject('Valor menor que 10'); // se rechaza la promesa
        return Promise.resolve(555); // se resuelve la promesa
    })
    .then(valor2 => {
        console.log('Segunda Promesa', valor2);
        return valor2;
    })
    .catch(e => console.log(e)) 
    .finally(() => console.log('Acá estamos en FINALLY')); 
