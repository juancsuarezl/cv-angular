import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  public year: string = '';

  constructor() { }

  public redes: Array<any> = [
    { name: "Github", href: "https://www.github.com/juancsuarezl", class: "fa-brands fa-github"},
    { name: "Linkedin", href: "https://www.linkedin.com", class: "fa-brands fa-linkedin"},
    { name: "Mail", href: "mailto:juancsuarezl@gmail.com", class: "fa-solid fa-envelope"},
    { name: "Whatsapp", href: "https://api.whatsapp.com/send?phone=1158966771", class: "fa-brands fa-whatsapp"},
  ]



  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }

}
