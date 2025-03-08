let user = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let letras = ['a', 'b', 'c', 'd', 'e'];

for (let indice in letras) {
    console.log(indice, letras[indice]);
}