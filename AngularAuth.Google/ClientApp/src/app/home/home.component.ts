import { Component } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private user: SocialUser;
  private loggedIn: boolean;
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}
