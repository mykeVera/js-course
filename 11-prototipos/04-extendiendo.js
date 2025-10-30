Object.prototype.isEqual = function (obj){
    // ...
}

let x = {};
x.isEqual({a: 1});

// NUNCA EXTENDER FUNCIONS CONSTRUCTORAS (Array, Number, Boolean, etc)