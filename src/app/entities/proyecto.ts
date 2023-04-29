export class Proyecto {
    id?:number;
    img:String;
    nombre:String;
    descripcion:String;
    url:String;

    constructor(img:String, nombre:String, descripcion:String, url:String) {
        this.img = img;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url;
    }
}
