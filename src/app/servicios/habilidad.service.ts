import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entities/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url= 'https://proyectoyael.onrender.com/habilidad/'   //'http://localhost:8080/habilidad/'
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista')
  }

  public ver(id:number):Observable<Habilidad>{  
    return this.httpClient.get<Habilidad>(this.url + `ver/${id}`)
  }

  public agregar(habilidad:Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', habilidad)
  }

  public update(id: number, habilidad:Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.url + `actualizar/${id}`, habilidad)
  }

  public eliminar(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}

