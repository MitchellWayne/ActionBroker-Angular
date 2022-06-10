import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ActionBroker-Angular';

  accordianImg = "assets/images/platforms-trade-with-the-best.png";
  onCloseAllEvent: EventEmitter<any> = new EventEmitter();


  collapseAccordians(img: string) {
    this.onCloseAllEvent.emit();
    this.accordianImg = img;
  }
}
