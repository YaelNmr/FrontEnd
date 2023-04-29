import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skills:any=[];
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.datosProyecto.obtenerDatos().subscribe(datos =>{
     this.skills=datos.habilidades;
    })
  }
}
