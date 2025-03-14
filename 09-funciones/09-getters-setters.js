const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set nombreCompleto(value) {
    const [nombre, apellido] = value.split(" ");
    this.nombre = nombre;
    this.apellido = apellido;
  },
};

// usuario.nombreCompleto = 12; // value.split is not a function or its return value is not iterable at set nombreCompleto
usuario.nombreCompleto = 'Chanchito feliz'; 
console.log(usuario.nombreCompleto);
