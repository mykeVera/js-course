/**
 * {
 *  url: ...
 *  bucket: amazon S3 // bucket se refiere a donde van a estar almacenador nuestros archivos de mi app
 *  port: 80
 * }
 */

// function configurarAPI(url) { // antes
//     const defaultURL = url || 'https://holamundo.io';
//     return `${defaultURL}`;
// }

// function configurarAPI(url = 'https://holamundo.io') { // forma moderna
//     return `${url}`;
// }

const config = {
  url: "https://holamundo.io",
};

function configurarAPI(url, bucket = 145, port = 80) {
  return `${url}/${bucket}:${port}`;
}

// console.log(configurarAPI());
console.log(configurarAPI("holamundo.io", undefined, 90)); // no recomendada
console.log(configurarAPI("holamundo.io")); // correcto, para esto poner tus valores por defecto al final en configurarAPI
