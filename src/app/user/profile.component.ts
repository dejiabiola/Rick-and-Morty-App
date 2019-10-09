import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './profile.component.html',
  styles:[`
    em{float:right;color:red;padding-left:10px}
    .error input{background-color: #e3c3c5}
    .error ::webkit-input-placeholder {color:#999}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName
  private lastName

  constructor(private authService:AuthService, private router: Router){}

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['character'])
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['character'])
    }

  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }
}
