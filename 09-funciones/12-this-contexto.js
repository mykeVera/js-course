const usuario = { // codigo moderno de como manejar el contexto de THIS en una arrow function
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach(ciudadania => {
      console.log(this.nombre, ciudadania);
    });
  },
};

usuario.mostrarCiudadanias(); 
