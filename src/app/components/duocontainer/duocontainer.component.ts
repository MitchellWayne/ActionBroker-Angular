import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-duocontainer',
  templateUrl: './duocontainer.component.html',
  styleUrls: ['./duocontainer.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class DuocontainerComponent implements OnInit {

  @Input() imgSrc!: string;
  @Input() hideOnMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
