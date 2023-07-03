import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";


export const articleDetailGuard: CanActivateFn = (route, state) => {

  const id: number = Number(route.url[1].path);

  const router = inject(Router);

  if(isNaN(id) || id <= 0)
  {
    router.navigateByUrl('/articles')
    return false
  }
  return true;
};
