import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public frontSkills: Array<any> = [
    {
      title: "FRONTEND",
      icon: "../assets/img/frontend-icon.png",
      languages: [
        { name: "WORDPRESS", icon: "../../../assets/img/wp-logo.png"},
        { name: "HTML", icon: "../../../assets/img/html-logo.webp"},
        { name: "CSS", icon:"../../../assets/img/css-logo.png"},
        { name: "BOOTSTRAP", icon: "../../../assets/img/bootstrap-logo.png"},
        { name: "JAVASCRIPT", icon: "../../../assets/img/js-logo.png"},
        { name: "ANGULAR", icon: "../../../assets/img/angular-logo.png"},
        { name: "REACT", icon: "../../../assets/img/react-logo.png"},
        { name: "VUEJS", icon: "../../../assets/img/vuejs-logo.png"},

      ]

    }
  ];

  public backSkills: Array<any> = [
    {
      title: "BACKEND",
      icon: "../assets/img/backend-icon.png",
      languages: [
        { name: "NODEJS", icon: "../../../assets/img/nodejs-logo.png"},
        { name: "JAVA", icon: "../../../assets/img/java-logo.jpg"},
        { name: "PHP", icon: "../../../assets/img/php-logo.png"},
        { name: "EXPRESS", icon: "../../../assets/img/express-logo.png"},
        { name: "GRAPHQL", icon: "../../../assets/img/graphql-logo.png"},
        { name: "JPA", icon: "../../../assets/img/jpa-logo.png"},
        { name: "TYPESCRIPT", icon: "../../../assets/img/typescript-logo.png"},
        { name: "TYPEORM", icon: "../../../assets/img/typeorm-logo.png"},

      ]

    }
  ];

  public dbSkills: Array<any> = [
    {
      title: "DATABASES",
      icon: "../assets/img/database-icon.png",
      languages: [
        { name: "SQL", icon: "../../../assets/img/sql-logo.png"},
        { name: "MySQL", icon: "../../../assets/img/mysql-logo.jpg"},
        { name: "MARIADB", icon: "../../../assets/img/mariadb-logo.png"},
        { name: "MongoDB", icon: "../../../assets/img/mongodb-logo.png"},

      ]
  }

  ];

  public toolSkills: Array<any> = [

  {
    title: "HERRAMIENTAS",
    icon: "../../../assets/img/tools-icon.png",
    languages: [
      { name: "VSCODE", icon: "../../../assets/img/vscode-logo.png"},
      { name: "INTELLIJ IDEA", icon: "../../../assets/img/idea-logo.png"},
      { name: "POSTMAN", icon: "../../../assets/img/postman-logo.webp"},
      { name: "SWAGGER", icon: "../../../assets/img/swagger-logo.png"},
      { name: "GIT", icon: "../../../assets/img/git-logo.png"},
      { name: "GITHUB", icon: "../../../assets/img/github-logo.png"},
      { name: "DOCKER", icon: "../../../assets/img/docker-logo.webp"},
      { name: "CYPRESS", icon: "../../../assets/img/cypress-logo.jfif"},

    ]
  }

  ];

  public operatingSystems: Array<any> = [
    {
      title: "OS",
      icon: "../../../assets/img/os-icon.png",
      languages: [
        { name: "WINDOWS", icon: "../../../assets/img/windows-logo.png" },
        { name: "LINUX", icon: "../../../assets/img/linux-logo.png" }
      ]
    }

  ];

  public languageSkills: Array<any> = [
    {
      title: "IDIOMAS",
      icon: "../../../assets/img/languages-icon.png",
      languages: [
        { name: "ESPAÑOL", icon: "../../../assets/img/spain-icon.png" },
        { name: "INGLÉS", icon: "../../../assets/img/usa-icon.png" }
      ]
    }


  ];

  public frontLanguages:Array<any> = [];
  public backLanguages:Array<any> = [];
  public dbLanguages:Array<any> = [];
  public languagesNames:Array<any> = [];
  public toolNames: Array<any> = [];
  public osNames: Array<any> = [];
  public languageNames: Array<any> = [];

  ngOnInit(): void {
    for(let i = 0; i < this.frontSkills[0].languages.length; i++){
      this.frontLanguages.push(this.frontSkills[0].languages[i])
    }

    for(let i = 0; i < this.backSkills[0].languages.length; i++){
      this.backLanguages.push(this.backSkills[0].languages[i])
    }

    for(let i = 0; i < this.dbSkills[0].languages.length; i++){
      this.dbLanguages.push(this.dbSkills[0].languages[i])
    }

    for(let i = 0; i < this.toolSkills[0].languages.length; i++){
      this.toolNames.push(this.toolSkills[0].languages[i])
    }

    for(let i = 0; i < this.operatingSystems[0].languages.length; i++){
      this.osNames.push(this.operatingSystems[0].languages[i])
    }

    for(let i = 0; i < this.languageSkills[0].languages.length; i++){
      this.languageNames.push(this.languageSkills[0].languages[i]);
    }
  }

}
