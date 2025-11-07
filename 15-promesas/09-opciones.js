// https://jsonplaceholder.typicode.com/todos

const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url, {   // todos los then siempre se resuelven
    method: 'POST', // GET (Por defecto), POST, PUT/PATCH, DELETE
    body: JSON.stringify({ title : 'Hola Mundo' }),
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'api key'
    },
    cache: 'no-cache' // default, no-cache, reload, force-cache, only-if-cached
})
    .then(response => {
        if (response.ok) {
            // return response.json();
            return response.text();
        }
        return Promise.reject(response.status); // por eso aqui, manenamos el error
    })
    .then(data => console.log(data))
    .catch(error => console.log({ error })); // captura cualquier error de la cadena de promesas

