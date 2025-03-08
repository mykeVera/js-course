let user = {
    email: 'test@example',
    name: 'test',
    direction: {
        calle: 'Calle 123',
        numero: 1234,
        ciudad: 'Ciudad 123',
        pais: 'País 123'
    },
    active: true,
    recuperarClave: function () { //funcion anonima
        console.log('Recuperando clave...');
    },
}