import { Injectable } from '@angular/core';
import { InjectionService } from './injection.service';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharListResolver implements Resolve<any> {

  constructor(private injectionService:InjectionService) { }

  resolve(){
    return this.injectionService.getPeople().pipe(map(events => events))
  }
}
