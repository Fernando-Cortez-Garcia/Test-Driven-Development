class spiderman {
    constructor(name, age, numMovies, schoolcinema) {
            this.name = name;
            this.age = age;
            this.numMovies = numMovies;
            this.schoolcinema = schoolcinema;
        }
        //metod for get info spiderman and study
    getInfo() {
        return `Hey, I'm ${this.name} and from ${this.schoolcinema}`;
    }
}
//exportamos la clase
module.exports = spiderman;