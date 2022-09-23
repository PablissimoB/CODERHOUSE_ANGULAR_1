export class Persona{
    public nombre:string;
    public apellido:string;
    public edad: number;


    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(){
        /* el this es para indicar que es este objeto, sino busca variable local nombre */
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }

    getEdad(){
        return this.edad;
    }

}
