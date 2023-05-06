import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/entities/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  estuEdit: Estudio = null;

  constructor(private sEstudio: EstudioService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.ver(id).subscribe(data =>{
      this.estuEdit = data;
    }, err =>{
      alert("Error al modificar estudio");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.update(id, this.estuEdit).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar estudio");
      this.router.navigate(['']);
    }
    )
  }
}
