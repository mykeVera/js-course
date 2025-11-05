class Entidad {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
    }

    save() {}
}

class User extends Entidad {
    constructor(name) {
        super(1); // importante llamar al constructor de la clase padre
        this.name = name;
    }
}

const u = new User('Juan');
console.log(u);