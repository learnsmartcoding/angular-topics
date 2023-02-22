import { Component, OnInit } from '@angular/core';
import { StaticData } from 'src/app/constants/static-data';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-ngstyle-example',
  templateUrl: './ngstyle-example.component.html',
  styleUrls: ['./ngstyle-example.component.css'],
})
export class NgstyleExampleComponent implements OnInit {
  appointments: Appointment[] = [];
  constructor() {}

  ngOnInit(): void {
    this.appointments = StaticData.appointments;
  }

  getStyle(slot: number) {
    if (slot < 12) {
      return { color: 'green', 'font-style': 'italic' };
    } else if (slot < 15) return { color: 'orange', 'font-weight': 'bold' };
    else {
      return {};
    }
  }
}
