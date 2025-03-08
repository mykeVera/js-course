const saludo = "Hola Mundo!";
//              012345

const despedida = new String("Chao mundo :(");

console.log(typeof saludo); // string
console.log(typeof despedida); // object

console.log(saludo.length); // 11
console.log(saludo.indexOf("Mu")); // 5 (indice)
console.log(saludo.indexOf("otracosa")); // -1 (no encontrado)
console.log(saludo.includes("Ho")); // true (true or false)
console.log(saludo.replace("Mundo", "Mike")); // Hola Mike!
console.log(saludo.toLowerCase()); // hola mundo!
console.log(saludo.toUpperCase()); // HOLA MUNDO!
console.log(saludo.substring(0, 3)); // Hol
console.log(saludo.substr(2, 5)); // la Mu  (metodo deprecado)

const espacios = "   Hola    Mundo!     ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());




