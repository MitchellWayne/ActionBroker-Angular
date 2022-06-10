import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ActionBroker-Angular';

  onCloseAllEvent: EventEmitter<any> = new EventEmitter();


  collapseAccordians() {
    this.onCloseAllEvent.emit();
  }
}
