import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {

} from './character/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharcardComponent } from './character/charcard/charcard.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { InjectionService } from './character/injection.service';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CharDetailComponent } from './character/char-detail/char-detail.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error/error404/error404.component';
import { AddCharComponent } from './character/add-char/add-char.component';
import { CharListResolver } from './character/char-list-resolver.service';
import { AuthService } from './user/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    CharcardComponent,
    WelcomeComponent,
    CharacterListComponent,
    FrontpageComponent,
    CharDetailComponent,
    Error404Component,
    AddCharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InjectionService,
    {provide:'canDeactivateAddChar', useValue:checkDirtyState},
    CharListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:AddCharComponent){
  if (component.isDirtyState==true) {
    return window.confirm('You have not saved your changes, do you really want to cancel?')
  }
  return true;
}
