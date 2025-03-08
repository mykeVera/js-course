let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Listando...');
        break;
    case 'guardar':
        console.log('Guardando...');
        break;
    default:
        console.log('Acción no válida');
        break;
}