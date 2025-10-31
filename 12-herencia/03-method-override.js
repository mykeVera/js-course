function getProto(u) {
    return Object.getPrototypeOf(u);
}
function Entidad() { }

Entidad.prototype.save = function () {
    console.log('Guardando desde Entidad');
}

function User() { }

// Method Override
User.prototype.save = function () {
    console.log('Guardando desde User');
}

// Forma moderna desde ECMA SCRIPT 6
Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();
console.log(getProto(getProto(u)).save());