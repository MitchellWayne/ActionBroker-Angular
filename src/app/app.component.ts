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

  // (By the time I finished this I realized I had misspelled 'accordion')
  // To keep only one accordion active at a time, I had them emit to this component
  // which then emits back through the accordions to collapse all but the targeted one. 
  collapseAccordians(img: string) {
    this.onCloseAllEvent.emit();
    this.accordianImg = img;
  }
}
