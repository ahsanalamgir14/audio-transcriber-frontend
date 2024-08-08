export class Audio{
    _id?: number;
    usuario: string;
    nombre: string;
    calidad: string;
    fecha: Date | undefined;
    isProcesado: boolean;

    constructor(usuario: string, nombre: string,  calidad: string, fecha: Date, isProcesado: boolean){
        this.usuario = usuario;
        this.nombre = nombre;
        this.calidad = calidad;
        this.fecha = fecha;
        this.isProcesado = isProcesado;
    }
}