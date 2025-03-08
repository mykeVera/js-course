let obj = {}; // es lo mismo que -> let obj = new Object

/**
 * new Array(); []
 * new String(); "" '' ``
 * new Number(); 123
 * new Boolean(); true false
 */

function Usuario() {
    this.name = 'Chanchito feliz';
}
let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));
console.log(eval(s1), s2.valueOf());
