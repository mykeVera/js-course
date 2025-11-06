let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

// let item1 = collection.namedItem('chanchito'); // <p class="blue" name="chanchito">Párrafo 4</p>
// let item2 = collection.item(3); // <p class="blue" name="chanchito">Párrafo 4</p>
// let item3 = collection[3]; // <p class="blue" name="chanchito">Párrafo 4</p>

// iterar elementos
// forma 1
// for (let el of collection) {
//     console.log(el);
// }

// forma 2
// Array.from(collection).forEach(el => console.log(el));

// forma 3
// [...collection].forEach(el => console.log(el));


let item1 = list.item(3);
let item2 = list[3];

// list.forEach(el => console.log(el));

// entries, keys y values
let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach(el => console.log(el));