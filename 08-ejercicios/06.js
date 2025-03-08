function dividePorTipo(arr) {
  // return { // first solution
  //     boolean: arr.filter(i => typeof i === 'boolean'),
  //     number: arr.filter(i => typeof i === 'number'),
  //     object: arr.filter(i => typeof i === 'object'),
  //     string: arr.filter(i => typeof i === 'string'),
  // }

  return arr.reduce((acc, el) => { // second solution
    let llave = typeof el;
    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(el);
    return acc;
  }, {});
}

const miArray = ["Hola", 12, true, "Mundo", {}, { id: 15 }, ["lala"]];

let arr = dividePorTipo(miArray);
console.log(arr);
// {
//     "string": ["Hola","Mundo"],
//     "number": [12],
//     "boolean": [true],
//     "object": [{},{"id": 15},["lala"]]
// }
