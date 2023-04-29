import { HttpClient } from '@angular/common/http';  //Hacer peticiones y CRUD (create, read, update, delete).
import { Injectable } from '@angular/core';        //permite que el servicio sea "inyectado" en los componentes y los componentes los consumen.
import { Observable } from 'rxjs';                //Observable: es para suscribirse a los datos que vienen del JSON, una vez que se suscribe a los datos si hay cambios en el JSON los puede ver, recibe respuestas asincrona.

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
                   //"http" es solo un alias, se puede poner otro nombre, lo que quiera.
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{                                 //método observable que devuelve los datos. Siempre escribir la primer palabra en minúscula y la siguiente en mayúscula.
    return this.http.get('./assets/datos/datosproyecto.json');   //retorno de datos utilizando el método GET de HttpClient que llama a la base de datos JSON ó a una URL.
  }
}
