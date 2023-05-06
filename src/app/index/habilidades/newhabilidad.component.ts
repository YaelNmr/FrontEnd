import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/entities/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private sHabilidad: HabilidadService, private router: Router) {}

  ngOnInit(): void {  
  }

  onCreate(): void{
    const hab = new Habilidad(this.nombre, this.porcentaje);
    this.sHabilidad.agregar(hab).subscribe(
      data =>{
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
   )
 }
}