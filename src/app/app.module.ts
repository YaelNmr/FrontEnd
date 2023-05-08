import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { BannerComponent } from './index/banner/banner.component';
import { PresentacionComponent } from './index/presentacion/presentacion.component';
import { ExperienciaComponent } from './index/experiencia/experiencia.component';
import { EducacionComponent } from './index/educacion/educacion.component';
import { HabilidadesComponent } from './index/habilidades/habilidades.component';
import { ProyectosComponent } from './index/proyectos/proyectos.component';
import { FooterComponent } from './index/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RedesComponent } from './index/navbar/redes/redes.component';
import { InterceptorProvider } from './servicios/interceptor-service';
import { NewexperienciaComponent } from './index/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './index/experiencia/editexperiencia.component';
import { NeweducacionComponent } from './index/educacion/neweducacion.component';
import { EditeducacionComponent } from './index/educacion/editeducacion.component';
import { NewhabilidadComponent } from './index/habilidades/newhabilidad.component';
import { EdithabilidadComponent } from './index/habilidades/edithabilidad.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    BannerComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    RedesComponent,
    NewexperienciaComponent,
    EditexperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewhabilidadComponent,
    EdithabilidadComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
