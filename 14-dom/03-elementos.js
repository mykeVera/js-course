let el = document.createElement('p');

el.innerHTML = "Elemento creado";

document.body.append(el);

// el.innerText = "<ul><li>Elemento creado</li></ul>";
// el.innerHTML = "<ul><li>Elemento creado</li></ul>";

el.style = 'background-color: red; font-weight: bold;';
el.className = 'parrafo';
el.id = 'mi-parrafo';
// lo siguiente no sirve
// el.mipropiedad = 'mi propiedad';

el.setAttribute('mi-propiedad', 'mi propiedad');
el.getAttribute('mi-propiedad');
el.hasAttribute('mi-propiedad');
