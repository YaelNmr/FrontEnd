import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entities/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[]=[];
  constructor(private sProyecto:ProyectoService) { }
  
  ngOnInit(): void {
   this.sProyecto.list().subscribe(data => {this.proyectos = data})
  }
}
