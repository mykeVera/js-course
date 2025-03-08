function Usuario(){

    let id = 1;

    this.name = 'Mike';

    let log = function(){
        console.log('Logging...');
    }

    this.guardar = function() {
        log()
        console.log('Guardando usuario...');
    }
}

const usuario = new Usuario();
usuario.guardar();

