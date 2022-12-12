import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent  {

  constructor() { }

  public presenciales: Array<any> = [
    {
      title: 'Ingeniería Electrónica',
      place: 'Caracas, Venezuela',
      name: 'Universidad Simón Bolívar',
      anio: 2008,
      class: "fa-solid fa-atom"
    },
    {
      title: 'Diplomado en Docencia',
      place: 'Caracas, Venezuela',
      name: 'UPEL',
      anio: 2010,
      class: "fa-solid fa-person-chalkboard"
    },
    {
      title: 'Fundamentos de Javascript',
      place: 'Buenos Aires, Argentina',
      name: 'Educación IT',
      anio: 2020,
      class: "fa-brands fa-js"
    }

  ];

  public udemys: Array<any> = [
    {
      title: 'Programación estructurada desde cero con Java',
      anio: 2019,
      class: "fa-brands fa-java"
    },
    {
      title: 'HTML and CSS for Beginners - Build a Website & Launch ONLINE',
      anio: 2019,
      class: "fa-brands fa-html5"
    },

    {
      title: 'React JS - Curso de Introducción desde cero',
      anio: 2020,
      class: "fa-brands fa-react"
    },

    {
      title: 'Aprende Wordpress desde cero',
      anio: 2020,
      class: "fa-brands fa-wordpress"
    },

    {
      title: 'Angular 8 - Curso básico de introducción',
      anio: 2019,
      class: "fa-brands fa-angular"
    },

    {
      title: 'La Web Empieza Aquí: Typescript, Angular, Storage, Firebase',
      anio: 2019,
      class: "fa-solid fa-database"
    },

  ];

  public itoos: Array<any> = [
    {
      title: 'Animaciones con CSS3',
      anio: 2020,
      class: "fa-brands fa-css3-alt"
    },
    {
      title: 'PHP y MySQL desde cero',
      anio: 2020,
      class: "fa-brands fa-php"
    },

    {
      title: 'ReactJs: La biblioteca creada por Facebook',
      anio: 2020,
      class: "fa-brands fa-react"
    },

  ];

  public ins: Array<any> = [
    {
      title: 'Fundamentos de la ciberseguridad',
      anio: 2020,
      class: "fa-solid fa-lock"
    },
    {
      title: 'Conviértete en desarrollador web full-stack',
      anio: 2020,
      class: "fa-solid fa-laptop-code"
    },

  ];

  public puzzles: Array<any> = [
    {
      title: 'GraphQL Apollo Server with Node.js, MongoDb',
      anio: 2020,
      class: "fa-solid fa-server"
    },
    {
      title: 'NodeJS: Crea tus aplicaciones RESTful',
      anio: 2020,
      class: "fa-brands fa-node-js"
    },

  ];


  ngOnInit(): void {

  }



}
