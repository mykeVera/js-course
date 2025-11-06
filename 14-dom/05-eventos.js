let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = e => {
    console.log('Entraste al formulario');
}

form.onmouseleave = e => {
    console.log('Saliste del formulario');
}

input.onfocus = e => {
    console.log('Focus en el input');
}

input.onblur = e => {
    console.log('Input perdio el focus');
}

input.onchange = e => {
    console.log('El valor del input cambió a: ', e.target.value);
}

// btn.onclick = e => {
//     e.preventDefault();
//     console.log('Diste click en el botón');
// }

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('Click con addEventListener');
});