// // codigo antiguio que posiblemente no topemos como developer
// function saludar(...rest){
//     console.log(this, rest);
// };

// saludar.call({propiedad: 'hola mundo'}, 1, 5);
// saludar.apply({propiedad: 'hola mundo'}, [1, 5]);
// saludar.bind({propiedad: 'hola mundo'})(1, 5);

const usuario = { // codigo moderno
    nombre: "Nicolas",
    ciudadanias: ["Chile", "Colombia", "New Zealand"],
    mostrarCiudadanias() {
      this.ciudadanias.forEach(function(ciudadania) {
        console.log(this.nombre, ciudadania);
      }, this);
    },
  };
  
  usuario.mostrarCiudadanias(); 
