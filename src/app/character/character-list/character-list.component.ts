import { Component, OnInit } from '@angular/core';
import { InjectionService } from '../injection.service';
import { ActivatedRoute } from '@angular/router';
import { IPeople } from 'src/app/shared';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  people: IPeople[];



  constructor(private injectionService: InjectionService, private routes:ActivatedRoute ) {
    this.people = this.routes.snapshot.data['people']
   }

  ngOnInit() {

    this.injectionService.getPeople().subscribe(people => {
      this.people = people;
    });
  }




}
