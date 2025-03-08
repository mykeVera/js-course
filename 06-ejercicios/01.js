function User(name) {
    this.id = Math.random();
    this.name = name;
}

let user = new User('Mike');
let user2 = new User('Angel');
console.log(user, user2);