import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPeople } from '../shared/people.model';


@Injectable({
  providedIn: 'root'
})
export class InjectionService {
  url: string = "https://rickandmortyapi.com/api/character/"
  peopleUrl: string = this.url + "1,2,3,4,5,6,7,8,9,10";




  getPeople(): Observable<any> {
    return this.http.get(this.peopleUrl);
  }

  getPerson(id:number):Observable<any>{
    return this.http.get(this.url + id)
  }
  constructor(private http:HttpClient) { }
}







const PEOPLE = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
  {
    "id": 183,
    "name": "Johnny Depp",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "location": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/183",
    "created": "2017-12-29T18:51:29.693Z"
  }
]

