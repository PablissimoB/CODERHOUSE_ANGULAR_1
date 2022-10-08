export interface Student{
    dni: number,
    apellido: string,
    nombre: string,
    fechaNacimiento: Date,
    vigente: boolean,
}
export let students: Student [] =[
    {
        dni:1,
        nombre:'Violeta',
        apellido:'Valery',
        fechaNacimiento: new Date(1980, 8, 11),
        vigente: true,
    },
    {
        dni:2,
        nombre:'Santuzza',
        apellido:'Rusticana',
        fechaNacimiento: new Date(1985, 5, 20),
        vigente: true,
    },
    {
        dni:3,
        nombre:'Butterfly',
        apellido:'Pinkerton',
        fechaNacimiento: new Date(1990, 8, 19),
        vigente: true,
    },
    {
        dni:4,
        nombre:'Turandot',
        apellido:'Puccini',
        fechaNacimiento: new Date(1950, 8, 11),
        vigente: true,
    }
]