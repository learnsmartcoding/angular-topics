import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete-example',
  templateUrl: './auto-complete-example.component.html',
  styleUrls: ['./auto-complete-example.component.css']
})
export class AutoCompleteExampleComponent implements OnInit {
  selectedOption: string='';

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
