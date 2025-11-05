// Los getters y setters son métodos especiales
// que permiten controlar el acceso a las propiedades
// de una clase, actuando como intermediarios
// entre el código externo y las propiedades
// internas.

class Restaurants {
    #timetable;
    constructor(name) {
        this.name = name;
    }

    get timetable() {
        return this.#timetable;
    }

    set timetable(value) {
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Invalid date');
        }
        this.#timetable = time;
    }
}

const r = new Restaurants('BBQ');

r.timetable = '1 Apr 1923';