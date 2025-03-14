const obj = {
    nombre: 'Mike',
};

function Extender(){
    this.login = () => {
        console.log(`${this.nombre} ha iniciado sesión.`);
    };
    this.logout = () => {
        console.log(`${this.nombre} ha cerrado sesión.`);
    };
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();