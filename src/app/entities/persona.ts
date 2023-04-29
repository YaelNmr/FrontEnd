export class Persona {
    id?:number;
    nombre:String;
    titulo:String;
    profileImage:String;
    subtitulo:String;
    acercadeMi:String;

    constructor (nombre:String, titulo:String, profileImage:String, subtitulo:String, acercadeMi:String) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.profileImage = profileImage;
        this.subtitulo = subtitulo;
        this.acercadeMi = acercadeMi;
    }
}
