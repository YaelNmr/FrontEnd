import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entities/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];     //se llama a la entity(o tambien llamado entities, model, modelo) con un array vacío

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService) { }   //se llama al servicio TS experiencia. El tokenService es para validar, si estoy logueada voy a poder hacer cosas, sino no.
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe(data => { this.experiencias = data })
  }
}

