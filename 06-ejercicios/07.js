let objeto = {name: 'Mike'};

function addId(obj){
    if(typeof obj === 'object'){
        obj.id = Math.random();
        return obj;
    }
    return 'No es un objeto';
}

const response = addId(objeto);
console.log(response);

