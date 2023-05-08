export class Proyecto {
    id?:number;
    img:string;
    nombre:string;
    descripcion:string;
    url:string;

    constructor(img:string, nombre:string, descripcion:string, url:string) {
        this.img = img;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url;
    }
}
