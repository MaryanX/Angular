import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../_services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {

  userProfil = JSON.parse(localStorage.getItem('currentUser'));


  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit()
  {}

  goLogout() {
    this.loginService.logout();
    this.router.navigate(['/connexion']);
  }


}
