import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Auth } from '../auth';
import { API_METHODS, Controllers } from '../../../constants/GlobalConstant';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IResponse } from '../../../models/interface/IResponse';
import { MyCar } from '../../../models/car';


@Injectable({
  providedIn: 'root',
})
export class Vehicles {

  http = inject(HttpClient);
  authsrv = inject(Auth);
  constructor() { }



 getAllvehicles(): Observable<IResponse> {
  const userId = this.authsrv.getUserId();
  console.log('UserId for API:', userId);

  return this.http.get<IResponse>(
    `${environment.API_URL}${Controllers.PARKINGVEHICLES}${API_METHODS.VEH_GET_BYUSERID}${userId}`
  );
}
  getselectvehicleByid(id: number): Observable<IResponse> {
    return this.http.get<IResponse>(
      `${environment.API_URL}${Controllers.PARKINGVEHICLES}${API_METHODS.VEH_GET_BYID}${id}`
    );
  }

  Addvehicle(vehicle: MyCar): Observable<IResponse> {
    return this.http.post<IResponse>(
      `${environment.API_URL}${Controllers.PARKINGVEHICLES}${API_METHODS.VEHICLE_CREATE}`,
      vehicle
    );
  }

  updatevehicle(id: number, vehicle: MyCar): Observable<IResponse> {
    return this.http.put<IResponse>(
      `${environment.API_URL}${Controllers.PARKINGVEHICLES}${API_METHODS.VEH_UPDATE}${id}`,
      vehicle
    );
  }
  deletevehicle(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(
      `${environment.API_URL}${Controllers.PARKINGVEHICLES}${API_METHODS.VEH_DELETE}${id}`
    );
  }
}   
