import { Component, OnInit } from '@angular/core';
import { Presencial } from '../../models/presencial.interface';
import { Curso } from '../../models/curso.interface';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent  {

  constructor(private dataService:DataService) { }

  public presenciales: Presencial[] = [];
  public udemys: Curso[] = [];
  public itoos: Curso[] = [];
  public ins: Curso[] = [];
  public puzzles: Curso[] = [];

  ngOnInit(): void {
    this.presenciales = this.dataService.getPresenciales();
    this.udemys = this.dataService.getUdemys();
    this.itoos = this.dataService.getItoos();
    this.ins = this.dataService.getIns();
    this.puzzles = this.dataService.getPuzzles();
  }
}
