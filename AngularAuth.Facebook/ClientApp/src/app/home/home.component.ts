import { Component } from '@angular/core';
import { SocialUser, AuthService } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private userFacebook: SocialUser;
  private loggedIn: boolean;
  constructor(private authService: AuthService,
    private http: HttpClient) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.userFacebook = user;
    });

  }
}
