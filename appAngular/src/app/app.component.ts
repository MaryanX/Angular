import { Component } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { Iuser } from '../_interfaces/i_users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  message: any;

  currentUser!: Iuser;

  constructor(private loginService: LoginService)
  {this.loginService.currentUser.subscribe(x => this.currentUser = x);}


  ngOnInit(): void
  {}








}
