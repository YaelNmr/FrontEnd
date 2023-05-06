import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/entities/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent implements OnInit {
  habEdit: Habilidad = null;

  constructor(private sHabilidad: HabilidadService, private activatedRouter: ActivatedRoute, private router:Router ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.ver(id).subscribe(data =>{
      this.habEdit = data;
    }, err =>{
      alert("Error al modificar la habilidad");
      this.router.navigate(['']);
    }
    ) 
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.habEdit).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la habilidad");
      this.router.navigate(['']);
    }
    )
  }
}