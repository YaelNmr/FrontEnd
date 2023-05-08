export class Estudio {
    id?:number;
    titulo: string ;
    institucion: string ;
    logo: string;
    inicio:string;
    fin: string;

    constructor (titulo:string, institucion:string, logo:string, inicio:string, fin:string) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.logo = logo;
        this.inicio = inicio;
        this.fin = fin;
    }
}
