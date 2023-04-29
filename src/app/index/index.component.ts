import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   //Acá se crean las variables de instancia para almacenar los datos con los que trata el servicio

  constructor() { }     //dentro de los () del constructor se inyecta el Servicio 
  ngOnInit(): void {
    
  }
}