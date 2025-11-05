const Entidad = {
    save() {
        console.log(`Save en Entidad`);
    }
}

const Actualizar = {
    update() {
        console.log(`Save en Actualizar`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    save() {
        console.log(`Save en User`);
    }
}

const nuevoProto = Object.assign({}, Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);


const u = new User('Juan');
console.log(u);

