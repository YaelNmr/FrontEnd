import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  miProyecto:any;
  constructor(private datosProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.datosProyecto.obtenerDatos().subscribe(datos =>{
      this.miProyecto=datos;
    })
  }
}
