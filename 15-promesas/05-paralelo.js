const p1 = Promise.reject('Fallo en conexión al servidor');
const p2 = Promise.reject(42);
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'foo');
});

// Promise.all([p1, p2, p3]) // todas se resuelven
//     .then(values => console.log('all', values)) // espera a que todas se resuelvan
//     .catch(e => console.log('error en all', e))


// Promise.race([p1, p2, p3]) // la que se resuelve primero
//     .then(value => console.log('race', value)) // el que se resuelve primero
//     .catch(e => console.log('error en race', e))

// Promise.any([p1, p2, p3]) // el primero que se resuelve
//   .then(value => console.log({ value })) // el primero que se resuelve
//   .catch(e => console.log({ e }))

Promise.allSettled([p1, p2, p3]) // espera a que todas se resuelvan o rechacen
  .then(values => console.log({ values })) // el estado de todas
  .catch(e => console.log({ e }))



