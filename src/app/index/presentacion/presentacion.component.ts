import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  miProyecto:any;
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.datosProyecto.obtenerDatos().subscribe(datos =>{
      this.miProyecto=datos;
    });
  }
}
