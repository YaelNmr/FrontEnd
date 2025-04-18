import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entities/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= 'https://backendyael.onrender.com/persona/';             //'http://localhost:8080/persona/'
  constructor(private httpClient:HttpClient) { }
  
  public list():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista')
  }

  public ver(id:number):Observable<Persona>{  
    return this.httpClient.get<Persona>(this.url + `ver/${id}`)
  }

  public agregar(persona:Persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona) 
  }

  public update(id: number, persona:Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + `actualizar/${id}`, persona)
  }

  public eliminar(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}

