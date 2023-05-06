import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/entities/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  titulo: string ;
  institucion: string ;
  logo: string;
  inicio: string;
  fin: string;

  constructor(private sEstudio: EstudioService, private router: Router) {}

  ngOnInit(): void {   
  }

  onCreate(): void{
    const estu = new Estudio(this.titulo, this.institucion, this.logo, this.inicio, this.fin);
    this.sEstudio.agregar(estu).subscribe(
      data =>{
        alert("Estudio añadido con éxito");
        this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
