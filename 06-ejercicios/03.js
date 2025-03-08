function similares(obj1, obj2) {
    let distintos = false;
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]){
            distintos = true;
        }
    }

    return !distintos;
}

let resultado = similares(
    {id: 1, name: 'Mike'},
    {id: 1, name: 'Angel'},
);

console.log(resultado);