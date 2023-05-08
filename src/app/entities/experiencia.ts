export class Experiencia {
      id?: number;
      nombre: string;
      puesto: string;  
      inicioyFin: string;
      imagen: string;
      descripcion: string;
     
      constructor (nombre:string, puesto:string, inicioyFin:string, imagen:string, descripcion:string) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.inicioyFin = inicioyFin;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
