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
import { FormularioComponent } from './login/formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioregComponent } from './registro/formularioreg/formularioreg.component';
import { PanelComponent } from './panel/panel.component';
import { NavbarpanelComponent } from './panel/navbarpanel/navbarpanel.component';
import { RedesComponent } from './index/navbar/redes/redes.component';
import { EditorComponent } from './panel/editor/editor.component';
import { BarverticalComponent } from './panel/editor/barvertical/barvertical.component';
import { EditredesComponent } from './panel/editor/barvertical/editredes/editredes.component';
import { EditbannerComponent } from './panel/editor/barvertical/editbanner/editbanner.component';
import { EditinfoComponent } from './panel/editor/barvertical/editinfo/editinfo.component';
import { EdittrabajoComponent } from './panel/editor/barvertical/edittrabajo/edittrabajo.component';
import { EditeducacionComponent } from './panel/editor/barvertical/editeducacion/editeducacion.component';
import { EditskillsComponent } from './panel/editor/barvertical/editskills/editskills.component';
import { EditproyectoComponent } from './panel/editor/barvertical/editproyecto/editproyecto.component';




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
    FormularioComponent,
    RegistroComponent,
    FormularioregComponent,
    PanelComponent,
    NavbarpanelComponent,
    RedesComponent,
    EditorComponent,
    BarverticalComponent,
    EditredesComponent,
    EditbannerComponent,
    EditinfoComponent,
    EdittrabajoComponent,
    EditeducacionComponent,
    EditskillsComponent,
    EditproyectoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
