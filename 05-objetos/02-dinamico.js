const user = { id: 1 };

user.name = "John";
user.guardar = function() { 
    console.log('Guardando', user.name)
};

user.guardar();

delete user.name;
delete user.guardar;  //eliminar propiedades o funciones de un objeto
console.log(user);

const user1 = Object.freeze({id: 1}); // bloquear propiedades del objeto
user1.name = 'Mike';
user1.id = 2;
console.log(user1);

const user2 = Object.seal({id: 1}); // pero para cambiar los valores de las props que ya tiene, pero no agregarle o quitarle propiedades
user2.name = 'Mike';
user2.id = 2;
console.log(user2);