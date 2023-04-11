import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message-service';

@Component({
  selector: 'app-auto-complete-example',
  templateUrl: './auto-complete-example.component.html',
  styleUrls: ['./auto-complete-example.component.css']
})
export class AutoCompleteExampleComponent implements OnInit {
  currentIndex = 0;
  selectedOption: string = '';
  positionClasses: string[] = ['toast-top-right', 'toast-bottom-right', 'toast-bottom-left', 'toast-top-left', 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-center', 'toast-bottom-center'];

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  triggerToastr(type: string) {
    this.triggerMsg(type);
    if (this.currentIndex <= this.positionClasses.length) {
      this.currentIndex = this.currentIndex + 1;
    } else {
      this.currentIndex = 0;
    }
  }

  triggerMsg(type: string) {
    let typeClass=type;
    this.messageService.show(`Showing position class ${this.positionClasses[this.currentIndex]} for 3 seconds. This is ${type} msg`, `${type}`, {
      timeOut: 2000,
      preventDuplicates: true,
      positionClass: this.positionClasses[this.currentIndex]
    });
    setTimeout(() => {
      this.triggerToastr(typeClass);
    }, 2500);    
  }
}
