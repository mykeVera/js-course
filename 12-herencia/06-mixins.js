function mixin(Ctr, ...args) {
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela() {
        console.log('volando');
    }
};

let nada = {
    nada() {
        console.log('nadando');
    }
};

let bano = {
    bano() {
        console.log('yendo al baño');
    }
};

let camina = {
    camina() {
        console.log('caminando');
    }
};

// vuela, nada, camina, va al baño
function Pato() {
    this.name = 'Pato Donald';
}
mixin(Pato, nada, camina, bano, vuela);

// nada, camina, va al baño
function Perro() { }
mixin(Perro, nada, bano, camina);

// nada, va al baño
function Pez() { }
mixin(Pez, nada, bano);

// vuela pero no nada, camina ni va al baño
function Avion() { }
mixin(Avion, vuela);