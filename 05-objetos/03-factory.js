function createUser(name, email) {
  return {
    email,
    name,
    active: true,
    recuperarClave: function () {
      console.log("Recuperando clave...");
    },
  };
}

let user1 = createUser('user1', 'user1@gmail.com');
let user2 = createUser('user2', 'user2@gmail.com');

console.log(user1, user2);
