import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {

  active: boolean = false;

  @Input() title!: string;
  @Input() text!: string;
  @Input() default: boolean = false;

  @Input() onCloseAllEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() closeAllEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.default) this.active = true;

    if (this.onCloseAllEvent) {
      this.onCloseAllEvent.subscribe(() => {
        this.collapse();
      });
    }
  }

  expand() {
    this.closeAllEvent.emit();
    this.active = true;
  }

  collapse() {
    this.active = false;
  }

}
