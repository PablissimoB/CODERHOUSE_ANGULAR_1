"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var persona_1 = require("./persona");
var mensaje = 'Mensaje';
var mensajeConcatenado = mensaje + " 2";
var n1 = 2.5;
var booleanos = false;
var opciones;
(function (opciones) {
    opciones[opciones["Si"] = 1] = "Si";
    opciones[opciones["No"] = 2] = "No";
})(opciones || (opciones = {}));
console.log("Mensaje 1:", mensaje);
console.log("Numero 1:", n1);
console.log(booleanos);
console.log(opciones);
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombre, apellido, edad, correo, nombreClase) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.correo = correo;
        _this.nombreClase = nombreClase;
        return _this;
    }
    return Usuario;
}(persona_1.Persona));
var usuario1 = new Usuario("Mariano", "Oblitas", 26, "mariano@gmail.com", "1");
var persona1 = new persona_1.Persona("Pablo", "Lago", 15);
function verificarObjeto(objeto) {
    if (objeto instanceof Usuario) {
        return "Hola Usuario " + objeto.getNombre();
    }
    else if (objeto instanceof persona_1.Persona) {
        return "Hola Persona " + objeto.getNombre();
    }
}
// function imprimirMensajes(){
// }
console.log(persona1);
console.log(usuario1);
console.log(verificarObjeto(persona1));
