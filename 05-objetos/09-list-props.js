const punto = {
  x: 10,
  y: 15,
  dibujar: function () {
    console.log("Dibujando");
  },
};
// delete punto.dibujar;
if('dibujar' in punto){
    punto.dibujar();
}

// console.log(Object.keys(punto));  // con el Object.keys puedo listar todas las props de un objeto

for(let i of Object.keys(punto)){ // codigo antiguo
    console.log(i, punto[i]);
}

for(let i of Object.entries(punto)){ // codigo antiguo
    console.log(i);
}

for(let i in punto) { // codigo MODERNO
    console.log(i, punto[i]);
}
