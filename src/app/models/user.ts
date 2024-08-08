export class User{
    _id?: number;
    usuario: string;
    nombre: string;
    email: string;

    constructor(usuario: string, nombre: string,  email: string){
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
    }
}