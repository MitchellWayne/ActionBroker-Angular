import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() accentImg!: string;
  @Input() laurelImg!: string;
  @Input() tier!: string;
  @Input() pricing!: string;
  @Input() subtext!: string;

  /*
    The following all have the same values at the moment
    Will be required if we have different properties on these for each tier
  */
  // @Input() maxOrders!: string;
  // @Input() maxSingleInvest!: string;
  // @Input() maxCombinedInvest!: string;
  // @Input() minInvest!: string;

  @Input() withdraw!: boolean;
  @Input() relation!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
