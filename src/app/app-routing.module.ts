import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RegistroComponent } from './registro/registro.component';
import { NewexperienciaComponent } from './index/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './index/experiencia/editexperiencia.component';


const routes: Routes = [
  {path: '', component:IndexComponent },
  {path: 'login', component:LoginComponent },
  {path: 'registro', component:RegistroComponent },
  {path: 'panel', component:PanelComponent },
  {path: 'nuevaexp', component:NewexperienciaComponent},
  {path: 'editexp/:id', component:EditexperienciaComponent},
  {path: '**', component:ErrorComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
