import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/entities/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios: Estudio[]=[];
  constructor(private sEstudio:EstudioService) { }

  ngOnInit(): void {
    this.sEstudio.list().subscribe(data =>{this.estudios = data})
}
}
