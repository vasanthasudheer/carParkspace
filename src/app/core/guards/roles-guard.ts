import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../service/auth';

export const rolesGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth); 
  const router = inject(Router); 
  const expectedRole = route.data['role']; 
  const currentRole = auth.getRoleId();
   if (expectedRole === currentRole)
     {
       return true;
       } router.navigate(['/login']); return false;
 
};
