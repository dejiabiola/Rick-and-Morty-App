import { Routes } from '@angular/router';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { CharacterListComponent} from './character/character-list/character-list.component';
import { CharDetailComponent } from './character/char-detail/char-detail.component';
import { Error404Component} from './error/error404/error404.component';
import { GuardDetailGuard } from './character/char-detail/guard-detail.guard';
import { AddCharComponent} from './character/add-char/add-char.component';
import { CharListResolver } from './character/char-list-resolver.service';



export const appRoutes:Routes = [

  {path: 'frontpage', component: FrontpageComponent},
  {path: 'character', component: CharacterListComponent, resolve:{people:CharListResolver}},
  {path: 'character/:id',canActivate:[GuardDetailGuard], component: CharDetailComponent },
  {path: 'add', component: AddCharComponent, canDeactivate:['canDeactivateAddChar']},
  {path: 'error', component: Error404Component},
  {path:"", redirectTo:'/frontpage', pathMatch: 'full'},
  {path:'user', loadChildren: './user/user.module#UserModule'}
]
