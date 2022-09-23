"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        /* el this es para indicar que es este objeto, sino busca variable local nombre */
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    return Persona;
}());
exports.Persona = Persona;
