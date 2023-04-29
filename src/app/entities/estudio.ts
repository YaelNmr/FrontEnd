export class Estudio {
    id?:number;
    titulo:String ;
    institucion:String ;
    logo:String;
    inicio:String;
    fin:String;

    constructor (titulo:String, institucion:String, logo:String, inicio:String, fin:String) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.logo = logo;
        this.inicio = inicio;
        this.fin = fin;
    }
}
