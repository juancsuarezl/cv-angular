import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

import { DataService } from './services/data/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    InteresesComponent,
    ContactoComponent,
    SocialMediaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
