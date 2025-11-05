class Entidad {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
    }

    save() {
        console.log(`Save en Entidad`);
    }
}

class User extends Entidad {
    constructor(name) {
        super(1); // importante llamar al constructor de la clase padre
        this.name = name;
    }

    save() {
        super.save(); // Llamada al método de la clase padre
        console.log(`Save en Usuario`);
    }
}

const u = new User('Juan');
console.log(u.save()); // Save en Usuario

