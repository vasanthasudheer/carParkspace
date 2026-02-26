import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { links } from '../../constants/url';
import { login } from '../../models/login';
import { IResponse } from '../../models/interface/IResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http=inject(HttpClient);
     constructor(){

   }
    getAllRoles():Observable<any[]>{
       return this.http.get(links.GetRoles)
       .pipe(map((res:any)=>{
          return res.data;
        })
       );
       
   }
 PostUser(obj:UserService):Observable<IResponse>{
    return this.http.post<IResponse>(links.RegUser,obj);

   }

   PostLogin(obj:login):Observable<IResponse>{
    return this.http.post<IResponse>(links.LoginUser,obj);
   }

  
}
