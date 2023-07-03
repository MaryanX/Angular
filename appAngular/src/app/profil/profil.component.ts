import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Iuser } from '../../_interfaces/i_users';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{


  currDiv: string = 'profil';
  public user: Iuser[] = [];
  currentUser!: Iuser;
  infoUser = localStorage.getItem('currentUser');
  userInfo = JSON.parse(this.infoUser);

  constructor(private loginService: LoginService) {
    this.currentUser = this.loginService.currentUserValue;
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  ngOnInit(): void
  {}


}
