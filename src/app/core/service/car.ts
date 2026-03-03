import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { API_METHODS, Controllers } from '../../constants/GlobalConstant';
import { Observable } from 'rxjs';
import { IResponse } from '../../models/interface/IResponse';

@Injectable({
  providedIn: 'root',
})
export class Car {
  http=inject(HttpClient);
  getcarSizes():Observable<IResponse>{
return this.http.get<IResponse>(
  environment.API_URL + Controllers.PARKCARSIZES + API_METHODS.CAR_GETALL
);  }
  //     'GetCarSizes': 'https://feestracking.freeprojectapi.com/api/parkSpaceCarSizes/get-all-car-sizes',
 
//api/parkSpaceCarSizes//get-all-car-sizes
}
