//importamos la clase de spiderman
const spiderman = require('./../app/spiderman');

describe("Unit Test for spiderman class", () => {
    test('1) create an spiderman object', () => {
        //Escribimos el codigo que queremos usar tal cual
        const andrewGarfield = new spiderman('Andrew Garfield', 31, 3, 'Sony')
            //validamos este codigo
        expect(andrewGarfield.name).toBe('Andrew Garfield')
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.numMovies).toBe(3)
        expect(andrewGarfield.schoolcinema).toBe('Sony')
    })
})