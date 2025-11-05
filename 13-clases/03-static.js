// La palabra reservada static en JavaScript
// se usa para definir métodos y propiedades
// que pertenecen a la clase en sí misma,
// NO a las instancias individuales de esa clase.

class Restaurants {
    static cantidad = 12;
    constructor(name) {
        this.name = name;
    }

    getTimetable() { // obtener horario
        console.log('horario restaurante');
    }

    static getRestaurant(id) {
        return new Restaurants(`Restaurante #${id}`);
    }
}

// ✅ Correcto - acceso desde la clase
console.log(Restaurants.cantidad); // 12
const restaurante = Restaurants.getRestaurant(12);
console.log(restaurante.name); // Restaurante #12

// ❌ Incorrecto - no se puede acceder desde instancias
const miRestaurante = new Restaurants("Mi Local");
console.log(miRestaurante.cantidad); // undefined
// miRestaurante.getRestaurant(1); // Error


