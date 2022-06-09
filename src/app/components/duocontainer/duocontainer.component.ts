import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-duocontainer',
  templateUrl: './duocontainer.component.html',
  styleUrls: ['./duocontainer.component.scss']
})
export class DuocontainerComponent implements OnInit {

  @Input() imgSrc!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
