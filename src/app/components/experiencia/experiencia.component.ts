import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.interface';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public jobs:Job[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.jobs = this.dataService.getJobs();
  }

}
