import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export const adminRoutesGuardGuard: CanActivateFn = (route, state) => {
  const userServ = inject(UserService);
  const router = inject(Router);

  if (userServ.getLocalStorageCheck) {
    return true;
  } else {
    alert('only admin can accses this');
    router.navigate(['/all']);
    return false;
  }
};
