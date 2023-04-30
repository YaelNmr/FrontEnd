import { Component, OnInit  } from '@angular/core';
import { Experiencia } from 'src/app/entities/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[];     //se llama a la entity(o tambien llamado entities, model, modelo) con un array 
  constructor(private sExperiencia:ExperienciaService) { }    //se llama al servicio TS experiencia

  ngOnInit(): void {
    this.sExperiencia.list().subscribe(data => {this.experiencias = data})
  }
}
