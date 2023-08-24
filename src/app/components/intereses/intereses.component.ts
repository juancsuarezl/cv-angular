import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  constructor() { }

  public interests:Array<any> = [
    {
      icon: "fas fa-church",
      name: "Religión Católica",
      description: "Voluntariado en el Ministerio de Música, Iglesia Santa Cruz (Misioneros Pasionistas), Buenos Aires, Argentina."

    },

    {
      icon: "fas fa-futbol",
      name: "Deportes",
      description:  "Fútbol, Béisbol, Baloncesto, Tenis, entre otros."

    },

    {
      icon: "fas fa-tv",
      name: "TV, Series y Películas",
      description:  "Netflix, Amazon Prime Video, entre otros."

    },

    {
      icon: "fas fa-code",
      name: "Programación en general",
      description:  "Aplicaciones de Escritorio, Aplicaciones Web, FrontEnd, BackEnd, FullStack, entre otros."

    },

    {
      icon: "fas fa-home",
      name: "Hogar",
      description:  "Familia, Unión Familiar, Paz, Armonía, entre otros."

    },

    {
      icon: "fas fa-user-friends",
      name: "Amistades",
      description:  "Relaciones Interpersonales, Sana Convivencia, Trabajo en Equipo, Sinergia, entre otros."

    },

    {
      icon: "fas fa-headphones-alt",
      name: "Música",
      description:  "Escuchar, Interpretar Música, tocar instrumentos musicales, cantar, componer canciones, entre otros."

    },


  ]

  ngOnInit(): void {
  }

}
