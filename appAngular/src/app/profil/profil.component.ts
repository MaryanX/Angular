import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  currDiv: string = 'profil';

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  // param = false;
  // upProfil = true;
  //
  // isShowDivIf = true;
  // isShowDivI = false;
  // isShowDivIff = false;
  //
  // toggleDisplayDivIf()
  // {
  //   this.isShowDivIf = true;
  //   this.isShowDivI = false;
  //   this.isShowDivIff = false;
  // }
  // toggleDisplayDivIff()
  // {
  //   this.isShowDivIf = false;
  //   this.isShowDivI = false;
  //   this.isShowDivIff = true;
  // }
  // toggleDisplayDivI()
  // {
  //   this.isShowDivIf = false;
  //   this.isShowDivI = true;
  //   this.isShowDivIff = false;
  // }

}
