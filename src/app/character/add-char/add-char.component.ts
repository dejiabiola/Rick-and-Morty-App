import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css']
})
export class AddCharComponent implements OnInit {
  isDirtyState: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
