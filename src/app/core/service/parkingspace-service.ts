import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IResponse } from '../../models/interface/IResponse';
import { Observable } from 'rxjs';
import { parkingSpaceD } from '../../models/parkingspace';
import { API_METHODS, Controllers } from '../../constants/GlobalConstant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ParkingspaceService {
  http=inject(HttpClient);

   SearchParkingSpaces(obj:any){
    return this.http.post(environment.API_URL+ Controllers.PARKINGSPACES + API_METHODS.PARKING_SEARCH ,obj);//links.SearchParkingSpace,obj);
  }
    GetAllSpaces(){
    debugger;
     let s=environment.API_URL + Controllers.PARKINGSPACES + API_METHODS.PARKING_GETALL;
    return this.http.get(s);//links.GetAllParkingSpaces);
  }
    PostParkingSpace(obj:parkingSpaceD):Observable<IResponse>{
    return this.http.post<IResponse>(environment.API_URL + Controllers.PARKINGSPACES + API_METHODS.PARKING_POST ,obj);//links.PostParkSpace,obj);
  }
    GetParkingSpaceById(ParkingId:number):Observable<IResponse>{
      return this.http.get<IResponse>(environment.API_URL + Controllers.PARKINGSPACES + API_METHODS.PARKING_GET_ID + ParkingId);//links.GetParkingSpaceByID + ParkingId);
  }
  UpdateParkingSpace(id:number,PrkingObj:parkingSpaceD):Observable<IResponse>{
    debugger;
    return this.http.put<IResponse>(environment.API_URL + Controllers.PARKINGSPACES + API_METHODS.PARKING_UPDATE + id ,PrkingObj);//links.UpdateParkingSpace +id,PrkingObj);
  }
  DeleteParkingSpace(id:number){
    return this.http.delete(environment.API_URL + Controllers.PARKINGSPACES + API_METHODS.PARKING_DELETE +id);//links.DeletePakingSpace + id);
  }
  
}
