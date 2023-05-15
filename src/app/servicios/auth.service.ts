import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../entities/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../entities/login-usuario';
import { JwtDto } from '../entities/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://proyectoyael.onrender.com/auth/';    //'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
