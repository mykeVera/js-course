function createUser(name) {
  return {
    id: Math.random(),
    name,
  };
}

let user1 = createUser("Mike");
let user2 = createUser("Angel");

console.log(user1, user2);
