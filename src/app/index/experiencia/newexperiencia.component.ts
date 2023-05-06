import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/entities/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {
  nombre: string = '';
  puesto: string = '';
  inicioyFin: string = '';
  imagen: string = '';
  descripcion: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) {}

  ngOnInit(): void {   
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombre, this.puesto, this.inicioyFin, this.imagen, this.descripcion);
    this.sExperiencia.agregar(expe).subscribe(
      data =>{
        alert("Experiencia añadida");
        this.router.navigate([''])
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
}
}
