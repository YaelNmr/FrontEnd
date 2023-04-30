import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entities/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  person: Persona[]=[];
  constructor(private sPersona:PersonaService) { }

  ngOnInit(): void {
   this.sPersona.list().subscribe(data => {this.person = data})
  }
}