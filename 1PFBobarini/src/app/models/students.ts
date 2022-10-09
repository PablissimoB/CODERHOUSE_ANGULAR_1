export interface Student{
    dni: number,
    apellido: string,
    nombre: string,
    fechaNacimiento: Date,
    mail: string,
    vigente: boolean,
}
export let students: Student [] =[
    {
        dni:1,
        nombre:'Violeta',
        apellido:'Valery',
        fechaNacimiento: new Date(1980, 8, 11),
        mail: 'prueba1@coderhouse.com',
        vigente: true,
    },
    {
        dni:2,
        nombre:'Santuzza',
        apellido:'Rusticana',
        fechaNacimiento: new Date(1985, 5, 20),
        mail: 'prueba2@coderhouse.com',
        vigente: true,
    },
    {
        dni:3,
        nombre:'Butterfly',
        apellido:'Pinkerton',
        fechaNacimiento: new Date(1990, 8, 19),
        mail: 'prueba3@coderhouse.com',
        vigente: true,
    },
    {
        dni:4,
        nombre:'Turandot',
        apellido:'Puccini',
        fechaNacimiento: new Date(1950, 8, 11),
        mail: 'prueba4@coderhouse.com',
        vigente: true,
    }
]