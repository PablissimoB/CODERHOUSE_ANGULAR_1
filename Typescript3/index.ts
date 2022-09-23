import { Persona } from './persona';
import { Inscripcion } from './inscripcion';

let mensaje: string = 'Mensaje';
let mensajeConcatenado: string = mensaje + " 2";
let n1: number = 2.5;
let booleanos: boolean = false;
enum opciones {
    Si=1,
    No=2
}

console.log("Mensaje 1:", mensaje);
console.log("Numero 1:", n1);
console.log(booleanos);
console.log(opciones);


class Usuario extends Persona implements Inscripcion{
    private correo: string;
    nombreClase: string;
    constructor(nombre:string, apellido:string, edad:number, correo: string, nombreClase: string){
        super(nombre, apellido, edad);
        this.correo = correo;
        this.nombreClase= nombreClase;
    }
    
}


let usuario1: Usuario = new Usuario("Mariano","Oblitas",26,"mariano@gmail.com","1");
let persona1: Persona = new Persona ("Pablo","Lago",15);


function verificarObjeto <T>(objeto: T){
    if(objeto instanceof Usuario){
        return "Hola Usuario " + objeto.getNombre();
    }
    else if (objeto instanceof Persona){
        return "Hola Persona "+ objeto.getNombre();
    }
}

// function imprimirMensajes(){
// }

    console.log(persona1);
    console.log(usuario1);
    console.log(verificarObjeto<Persona>(persona1));
