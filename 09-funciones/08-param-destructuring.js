// function webServer(config) { // antes
//   const url = config.url;
//   return url;
// }

// const config = {
//   url: "https://holamundo.io",
//   direccion: {
//     calle: "Av. larco 123",
//     numero: 80,
//   },
// };



// FORMA MODERNA CON OBJECTS  **************************************************
const config = {
  url: "https://holamundo.io",
  direccion: {
    calle: "Av. larco 123",
    numero: 80,
  },
};

function webServer({ url, ...rest }) { // forma moderna
  console.log(rest);
  //   const { url } = config;
  return url;
}

console.log(webServer(config));



// FORMA MODERNA CON ARRAYS ************************************************
const config2 = ["https://holamundo.io", 145, 80];

function webServer2([url, ...rest]) { // forma moderna
  console.log(rest);
  return url;
}

console.log(webServer2(config2));
