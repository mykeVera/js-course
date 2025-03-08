let obj1 = {id: 1, name: 'chanchito'};
function crearCopia(obj) {
    //opcion 1
    return {...obj};
    
    //opcion 2
    // let copia = {};
    // for (let key in obj) {
    //     copia[key] = obj[key];
    // }
    // return copia;

    //opcion 3
    // let objcopia = obj;
    // return objcopia;
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2});