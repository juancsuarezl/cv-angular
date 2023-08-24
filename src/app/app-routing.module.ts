import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'intereses', component: InteresesComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'contacto', component: ContactoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
