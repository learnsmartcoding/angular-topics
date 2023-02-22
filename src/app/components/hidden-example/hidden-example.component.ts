import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { StaticData } from './../../constants/static-data';

@Component({
  selector: 'app-hidden-example',
  templateUrl: './hidden-example.component.html',
  styleUrls: ['./hidden-example.component.css'],
})
export class HiddenExampleComponent implements OnInit {
  appointments: Appointment[] = [];
  selectedHour="-1";
  constructor() {}

  ngOnInit(): void {
    this.appointments = StaticData.appointments;
  }

  hourFilterChanged(selectedHour:string){

  }
}
