const ahora = new Date();

const fecha = new Date('December 11 1986 14:15 GMT-0300'); // Mes/Dia/Año

const fecha2 = new Date(1992, 6, 11, 14, 15, 35); //año, mes, dia, hora, minutos, segundos

const fecha3 = new Date(1992, 6, 11, 14+15, 15, 35); //modificando en GMT

// formatos internacionales
console.log(ahora.toDateString());
console.log(ahora.toISOString()); //Recomendado para guardar en el servidor
console.log(ahora.toTimeString());

console.log('______________________');

// Obtener datos de una fecha (GET)
console.log(ahora.getDay()); //numero de la semana empezando desde el lunes
console.log(ahora.getDate()); //numero del dia actual
console.log(ahora.getMonth() + 1);
console.log(ahora.getFullYear());

//Cambiar datos de una fecha (SET)
const nuevoanio = ahora.setFullYear(1992)
console.log(new Date(nuevoanio));



