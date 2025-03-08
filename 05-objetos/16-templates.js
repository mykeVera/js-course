const saludo = "Hola \\mundo! \nbienvenidos' a\t \"ultimate javascript\" =) soy \'Mike Vera\'";

function plantilla(nombre, apellido) {
return `Hola Mundo!

Bienvenido a "Ultimate JavaScript" =)

${nombre} ${apellido}.`
}

const nombrecompleto = plantilla('Mike', 'Vera')

console.log(nombrecompleto);
//Hola Mundo!
//
//Bienvenido a "Ultimate JavaScript" =)
//
//Mike Vera.