import { Component, OnInit } from '@angular/core';
import { StaticData } from 'src/app/constants/static-data';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-ngclass-example',
  templateUrl: './ngclass-example.component.html',
  styleUrls: ['./ngclass-example.component.css'],
})
export class NgclassExampleComponent implements OnInit {
  appointments: Appointment[] = [];
  constructor() {}

  ngOnInit(): void {
    this.appointments = StaticData.appointments;
  }

  getClass(slot: number) {
    //return {green:slot<12, bold: slot>12} ; or like below
    if (slot < 12) {
      return 'green italic';
    } else if (slot < 15) return ['orange', 'bold'];
    else {
      return {};
    }
  }
}
