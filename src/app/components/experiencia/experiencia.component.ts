import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  public jobs: Array<any> = [
    {
      companyName: "INVAP",
      href: "https://www.invap.com.ar/",
      charge: "Desarrollador Frontend",
      description: "Angular 13, Java EE, Wicket, JPA",
      time: "Actualmente",
      companyIcon: "../../../assets/img/invap-logo.jfif",
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
      description: "PHP, Yii, VueJS, Docker",
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
      description: "Visual Basic para Aplicaciones, Access, SQL Server",
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
      description: "Visual Basic para Aplicaciones, Outlook, Macros, Excel",
      time: "Abr 2019 - Mar 2020",
      companyIcon: "../../../assets/img/citi-logo.jfif",
      chargeIcon: "fa-solid fa-user-tie",
      descIcon: "fa-regular fa-address-card",
      timeIcon: "fa-regular fa-calendar"
    }

  ];

  ngOnInit(): void {
  }

}
