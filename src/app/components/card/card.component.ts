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
  @Input() withdraw!: boolean;
  @Input() relation!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
