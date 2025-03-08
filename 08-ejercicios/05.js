const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

function obtenerMayor(arr){
    let mayor = arr[0];
    for(let i of arr){
        if(mayor.edad < i.edad) 
            mayor = i;
    }
    return mayor;
}

// function obtenerMayor(arr){ // recomend
//     return arr.reduce((mayor, usuario) => {
//         if(usuario.edad > mayor.edad) return usuario;
//         return mayor;
//     });  // OJO: reduce devuelve un solo elemento, por lo que si hay más de un usuario con la misma edad, solo se retornará el primero que encuentra.  //
// }

const mayor = obtenerMayor(usuarios);

console.log(mayor); // { edad: 32, nombre: "Fernanda", plan: "free" }
