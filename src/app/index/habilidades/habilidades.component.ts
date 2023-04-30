import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entities/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[]=[];
  constructor(private sHabilidad:HabilidadService) { }

  ngOnInit(): void {
    this.sHabilidad.list().subscribe(data =>{this.habilidades = data})
  }
}
