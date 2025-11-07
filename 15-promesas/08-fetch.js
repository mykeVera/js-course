// https://jsonplaceholder.typicode.com/todos/1

const url = 'https://jsonplaceholder.typicode.com/todos/1a';

fetch(url) // todos los then siempre se resuelven
    .then(response => {
        if (response.ok) {
            // return response.json();
            return response.text();
        }
        return Promise.reject(response.status); // por eso aqui, manenamos el error
    })
    .then(data => console.log(data))
    .catch(error => console.log({ error })); // captura cualquier error de la cadena de promesas

