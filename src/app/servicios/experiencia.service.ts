import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entities/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='http://localhost:8080/experiencia/'   //la / al final es para llamar solo al sectorcito experiencia. sin la / al final llamaria a todo
  constructor(private httpClient:HttpClient) { } 

  public list():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista')
  }

  public ver(id:number):Observable<Experiencia>{  //acá no tiene el array [] porque trae una sola experiencia
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`)
  }

  public agregar(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia) //la url se pone asi porque tengo un @RequestBody de experiencia en netbeans, esta expriencia se retorna
  }

  public update(experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + 'actualizar', experiencia)
  }

  public eliminar(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
