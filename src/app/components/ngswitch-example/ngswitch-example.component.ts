import { Component, OnInit } from '@angular/core';
import { StaticData } from 'src/app/constants/static-data';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-ngswitch-example',
  templateUrl: './ngswitch-example.component.html',
  styleUrls: ['./ngswitch-example.component.css']
})
export class NgswitchExampleComponent implements OnInit {

  appointments: Appointment[] = [];  
  constructor() {}

  ngOnInit(): void {
    this.appointments = StaticData.appointments;
  }

}
