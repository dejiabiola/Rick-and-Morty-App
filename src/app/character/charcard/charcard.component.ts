import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-charcard',
  templateUrl: './charcard.component.html',
  styleUrls: ['./charcard.component.css']
})
export class CharcardComponent implements OnInit {

  @Input() people: any;
  constructor() { }

  ngOnInit() {

  }



}
