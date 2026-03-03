import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../auth';
import { API_METHODS, Controllers } from '../../../constants/GlobalConstant';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpacingList {
    constructor(private http:HttpClient,private auths:Auth){

  }

  GetSpaceListings(){
    debugger;
    //get ownerid first
    let ownerId=  this.auths.getUserId();//.getRoleId();
    console.log(ownerId);
   return this.http.get(environment.API_URL + Controllers.PARKINGSPACES + API_METHODS.PARKING_GETOWNER + ownerId );//links.GetOwnerParkingSpace + ownerId );//GetParkingSpaces);
  }
}
 
