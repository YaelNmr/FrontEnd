export class Persona {
    id?:number;
    nombre:string;
    titulo:string;
    profileImage:string;
    subtitulo:string;
    acercadeMi:string;

    constructor (nombre:string, titulo:string, profileImage:string, subtitulo:string, acercadeMi:string) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.profileImage = profileImage;
        this.subtitulo = subtitulo;
        this.acercadeMi = acercadeMi;
    }
}
