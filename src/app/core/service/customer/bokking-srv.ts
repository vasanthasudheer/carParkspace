import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API_METHODS,  } from '../../../constants/GlobalConstant';
import { Controllers } from '../../../constants/GlobalConstant';
import { parkingBookings } from '../../../models/parkingbookig';

@Injectable({
  providedIn: 'root',
})
export class BokkingSrv {
    
  http=inject(HttpClient);
  
  constructor(){

  }
  AddBooking(bookingobj:parkingBookings):Observable<parkingBookings>{
    debugger;
    let s=environment.API_URL + Controllers.PARKSPACEBOOKINGS + API_METHODS.BOOKING_CREATE;
     return this.http.post<any>(environment.API_URL + Controllers.PARKSPACEBOOKINGS + API_METHODS.BOOKING_CREATE, bookingobj);//links.PostBooking,bookingobj);
  }
  
}
