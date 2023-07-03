import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const ProfilGuard: CanActivateFn = (route, state) => {

  const userProfil = localStorage.getItem('currentUser');
  const xid = JSON.parse(userProfil);


  const router = inject(Router);


  if(!userProfil) {
      router.navigateByUrl('/connexion')
      return false
    }
  return true;
};
