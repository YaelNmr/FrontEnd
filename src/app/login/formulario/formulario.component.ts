import { Component, OnInit } from '@angular/core';                        //NO usar Ñ ni acentos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})  

export class FormularioComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionServicio:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }
  ngOnInit(): void {
    
  }
  get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password')
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionServicio.IniciarSesion(this.form.value).subscribe(datos=>{
      console.log("DATA:" + JSON.stringify(datos));
      this.ruta.navigate(['./panel'])
    })
  }

}