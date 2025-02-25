import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NewexperienciaComponent } from './index/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './index/experiencia/editexperiencia.component';
import { NeweducacionComponent } from './index/educacion/neweducacion.component';
import { EditeducacionComponent } from './index/educacion/editeducacion.component';
import { NewhabilidadComponent } from './index/habilidades/newhabilidad.component';
import { EdithabilidadComponent } from './index/habilidades/edithabilidad.component';


const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaexp', component:NewexperienciaComponent},
  {path: 'editexp/:id', component:EditexperienciaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'newhab', component:NewhabilidadComponent},
  {path: 'edithab/:id', component:EdithabilidadComponent},
  {path: '**', component:ErrorComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
