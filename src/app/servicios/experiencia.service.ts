import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entities/experiencia';

@Injectable({
  providedIn: 'root'                        //todo esto sale del Controller de netbeans
})                                          
export class ExperienciaService {
  url=' https://proyectoyael.onrender.com/experiencia/'   //la / al final es para llamar solo al sectorcito experiencia. sin la / al final llamaria a todo
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

  public update(id: number, experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + `actualizar/${id}`, experiencia)
  }

  public eliminar(id:number):Observable<any>{ 
    return this.httpClient.delete<any>(this.url + `borrar/${id}`)
  }
}
