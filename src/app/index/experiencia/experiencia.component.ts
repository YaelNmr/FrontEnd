import { Component, OnInit  } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  trabajos:any=[];
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.datosProyecto.obtenerDatos().subscribe(datos =>{
      this.trabajos=datos.experiencias;
    })
  }
}
