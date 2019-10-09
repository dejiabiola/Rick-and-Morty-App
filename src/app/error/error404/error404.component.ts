import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <div>
    <h1>404 Error</h1>
    <h3>The page cannot be found</h3>
    <button [routerLink]="['/character']">Go Back</button>
    </div>
  `,
  styles: [`
    div {
      margin-top: 150px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    h1, h3 {
      font-size: 3em;
    }
    button {
      font-size: 1.5em;
      padding: 10px;
    }
  `]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
