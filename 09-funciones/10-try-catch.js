function sumaTodo(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("El parametro no es un array");
  }
  return arr.reduce((acc, el) => {
    if (typeof el !== "number" || Number.isNaN(el)) {
      throw new Error(`Elemento "${el}" no es número`);
    }
    return acc + el;
  }, 0);
}

// console.log(sumaTodo([1, 2, 3, 4]));
try {
  console.log(sumaTodo([1, 2, 3, 4]));
} catch (e) {
  console.log(e.message);
}

console.log("despues del try chatch");
