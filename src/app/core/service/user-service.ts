import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
 import { login } from '../../models/login';
import { IResponse } from '../../models/interface/IResponse';
import { API_METHODS, Controllers } from '../../constants/GlobalConstant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http=inject(HttpClient);
     constructor(){

   }
    getAllRoles():Observable<any[]>{
       return this.http.get( environment.API_URL + Controllers.PARKINGROLES + API_METHODS.ROLES_GETALL )
       .pipe(map((res:any)=>{
          return res.data;
        })
       );
       
   }
 PostUser(obj:UserService):Observable<IResponse>{
    return this.http.post<IResponse>(environment.API_URL + Controllers.PARKINGUSERS + API_METHODS.REG_USER  ,obj);

   }

   PostLogin(obj:login):Observable<IResponse>{
    return this.http.post<IResponse>(environment.API_URL + Controllers.PARKINGUSERS + API_METHODS.LOGINN,obj);
   }

  
}
