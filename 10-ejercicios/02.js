const obj = {
    nombre: 'Mike',
};

function extender(usuario){
    usuario.login = () =>{
        console.log('Iniciando sesión...');
    }
    usuario.logout = () =>{
        console.log('Cerrando sesión...');
    }
    return usuario;
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
usuario.logout();