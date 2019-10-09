import { Component, OnInit } from '@angular/core';
import { InjectionService } from '../injection.service';
import { ActivatedRoute } from '@angular/router' ;

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit {
  person:any[];
  constructor(private injectionService: InjectionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.injectionService.getPerson(+this.route.snapshot.params['id']).subscribe(person => {
      this.person = person
    })
  }

}

