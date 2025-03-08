let objeto = {
  id: 1,
  name: false,
  login: function () {},
  logout: function () {},
};

let propiedad = "name";

function tieneProp(obj, propiedad) {
  for (let key in obj) {
    if (key === propiedad) {
      return true;
    }
  }
  return false;
}

console.log(tieneProp(objeto, propiedad));
