import { Presencial } from "../../models/presencial.interface";
import { Curso } from '../../models/curso.interface';
import { Job } from "../../models/job.interface";

import { Injectable } from "@angular/core";


@Injectable()
export class DataService {

  // *************  Educación **********************
  public presenciales: Presencial[] = [
    {
      title: 'Ingeniería Electrónica',
      place: 'Caracas, Venezuela',
      name: 'Universidad Simón Bolívar',
      anio: 2008,
      class: "fa-solid fa-atom",
      href: "https://www.instagram.com/campusb/?hl=es-la"
    },
    {
      title: 'Diplomado en Docencia',
      place: 'Caracas, Venezuela',
      name: 'UPEL',
      anio: 2010,
      class: "fa-solid fa-person-chalkboard",
      href: "https://www.upel.edu.ve/"
    },
    {
      title: 'Fundamentos de Javascript',
      place: 'Buenos Aires, Argentina',
      name: 'Educación IT',
      anio: 2020,
      class: "fa-brands fa-js",
      href: "https://www.educacionit.com/"
    }

  ];

  public udemys: Curso[] = [
    {
      title: 'Spring Framework & Spring Boot de cero a experto',
      anio: 2023,
      class: "fa-brands fa-java",
      institute: 'Udemy'
    },
    {
      title: 'React: De cero a experto (Hooks y MERN)',
      anio: 2020,
      class: "fa-brands fa-react",
      institute: 'Udemy'
    },

    {
      title: 'Aprende Wordpress desde cero',
      anio: 2020,
      class: "fa-brands fa-wordpress",
      institute: 'Udemy'
    },

    {
      title: 'CRUD Angular, Node (MEAN)',
      anio: 2019,
      class: "fa-solid fa-database",
      institute: 'Udemy'
    },

  ];

  public itoos: Curso[] = [

    {
      title: 'ReactJs: La biblioteca creada por Facebook',
      anio: 2020,
      class: "fa-brands fa-react",
      institute: 'Itoo'
    },

  ];

  public ins: Curso[] = [
    {
      title: 'Conviértete en desarrollador web full-stack',
      anio: 2020,
      class: "fa-solid fa-laptop-code",
      institute: 'Linkedin Learning'
    },

  ];

  public puzzles: Curso[] = [
    {
      title: 'GraphQL Apollo Server with Node.js, MongoDb',
      anio: 2020,
      class: "fa-solid fa-server",
      institute: 'Puzzle Academy'
    },
    {
      title: 'NodeJS: Crea tus aplicaciones RESTful',
      anio: 2020,
      class: "fa-brands fa-node-js",
      institute: 'Puzzle Academy'
    },

  ];

  // *************  Experiencia **********************

  public jobs: Job[] = [
    {
      companyName: "INVAP",
      href: "https://www.invap.com.ar/",
      charge: "Desarrollador Fullstack",
      description: "HTML, CSS, Javascript, Angular, Java, Spring",
      time: "Oct 2022 - Presente",
      companyIcon: "../../../assets/img/invap-logo.jpg",
      chargeIcon: "fa-solid fa-user-tie",
      descIcon: "fa-regular fa-address-card",
      timeIcon: "fa-regular fa-calendar"

    },

    {
      companyName: "LUBEE SOFT",
      href: "https://www.lubee.com.ar/",
      charge: "Desarrollador Frontend",
      description: "Angular 14, VueJS",
      time: "Abr 2021 - Sep 2022",
      companyIcon: "../../../assets/img/lubee-logo.jpg",
      chargeIcon: "fa-solid fa-user-tie",
      descIcon: "fa-regular fa-address-card",
      timeIcon: "fa-regular fa-calendar"

    },

    {
      companyName: "ARTFOS S.A.",
      href: "https://www.artfos.com.ar/",
      charge: "Desarrollador Frontend",
      description: "PHP, Yii, VueJS, Docker, Cypress",
      time: "Mar 2021 - Jun 2022",
      companyIcon: "../../../assets/img/artfos-logo.jfif",
      chargeIcon: "fa-solid fa-user-tie",
      descIcon: "fa-regular fa-address-card",
      timeIcon: "fa-regular fa-calendar"
    },

    {
      companyName: "TOYOTA BROKER DE SEGUROS",
      href: "https://www.toyotabroker.com.ar/",
      charge: "Desarrollador Access y VBA",
      description: "VBA, Access, SQL Server",
      time: "Abr 2021 - Sep 2022",
      companyIcon: "../../../assets/img/toyota-logo.png",
      chargeIcon: "fa-solid fa-user-tie",
      descIcon: "fa-regular fa-address-card",
      timeIcon: "fa-regular fa-calendar"
    },

    {
      companyName: "CITIBANK ARGENTINA",
      href: "https://www.citibank.com/icg/sa/latam/argentina/",
      charge: "Desarrollador VBA",
      description: "VBA, Outlook, Macros, Excel",
      time: "Abr 2019 - Mar 2020",
      companyIcon: "../../../assets/img/citi-logo.jfif",
      chargeIcon: "fa-solid fa-user-tie",
      descIcon: "fa-regular fa-address-card",
      timeIcon: "fa-regular fa-calendar"
    }
  ];

// *************  Métodos Educación **********************
  getPresenciales():Presencial[]{
    return this.presenciales;
  }

  getUdemys():Curso[]{
    return this.udemys;
  }

  getItoos():Curso[]{
    return this.itoos;
  }

  getIns():Curso[]{
    return this.ins;
  }

  getPuzzles():Curso[]{
    return this.puzzles;
  }


// *************  Métodos Experiencia **********************

  getJobs(): Job[]{
    return this.jobs;
  }
}
