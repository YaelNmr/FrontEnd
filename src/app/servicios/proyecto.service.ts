import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entities/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url='http://localhost:8080/proyecto/'
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista')
  }

  public ver(id:number):Observable<Proyecto>{  
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`)
  }

  public agregar(proyecto:Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto) 
  }

  public update(id: number, proyecto:Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.url + `actualizar/${id}`, proyecto)
  }

  public eliminar(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
