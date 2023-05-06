import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/entities/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  expeEdit : Experiencia = null;

  constructor(private sExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];  //captura el id de la experiencia que quiero modificar
    this.sExperiencia.ver(id).subscribe(data =>{
      this.expeEdit = data;
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expeEdit).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    )
  }
}
