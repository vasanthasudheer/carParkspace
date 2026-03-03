import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
 
import { IResponse } from '../../models/interface/IResponse';
import { Car } from '../../core/service/car';
import { Auth } from '../../core/service/auth';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { ParkingspaceService } from '../../core/service/parkingspace-service';
import { parkingSpaceD } from '../../models/parkingspace';
 



@Component({
  selector: 'app-parking-space',
  imports: [ReactiveFormsModule,NgFor,RouterLink,NgIf],
  templateUrl: './parking-space.html',
  styleUrl: './parking-space.css',
})
export class ParkingSpace implements OnInit,OnDestroy{
  carList = signal<any[]>([]);

  parkSpaceForm: FormGroup = new FormGroup({
    parkingSpaceId: new FormControl(0),
    ownerId: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    supportedCarSizeId: new FormControl(1, [Validators.required]),
    pricePerMonth: new FormControl(0, [Validators.required]),
    isAvailable: new FormControl(true),
    createdDate: new FormControl(new Date()),
  });

  ParkingSpaceID_Ed:number =0;
  isEditmode :boolean =false;

  parkingSpace!:parkingSpaceD;

  subscription:Subscription[]=[];


  constructor(private http :ParkingspaceService, private carhttp: Car, private auths: Auth,private activatedroute:ActivatedRoute,private router:Router) {

  }
  
  getParkingid() {
    let id =
      this.activatedroute.snapshot.paramMap.get('id');
    this.ParkingSpaceID_Ed = Number(id);
    debugger;

    if (this.ParkingSpaceID_Ed != 0) {
      this.isEditmode = true;
      //Read the values first and fill the controls with values
      let s1 = this.http.GetParkingSpaceById(this.ParkingSpaceID_Ed).subscribe({
        next: (res: IResponse) => {
          debugger;
          //  this.MonthlyPz = res.data.pricePerMonth;
          //this.spaceDetails.set([res.data]);
          this.parkSpaceForm.patchValue(res.data);
        },
        error: (err: any) => {

        }
      });

      this.subscription.push(s1);
    }
    // alert(id);
  }
    ngOnInit(): void {
    this.getParkingid();
    this.parkSpaceForm.patchValue({
  ownerId: 1
  });

   let s1= this.carhttp.getcarSizes().subscribe({
      next: (res: IResponse) => {
        debugger;
        this.carList.set(res.data);
      }
    });

    this.subscription.push(s1);
  }

  UpdateFormcontrols() {
    let OwnerID = this.auths.getUserId() ; //getRoleId();
    this.parkSpaceForm.patchValue({
      ownerId: OwnerID
    });
  }
 OnUpdate(){
       this.UpdateFormcontrols();  //FOR OWNER ID UPDATIONS
   let s1= this.http.UpdateParkingSpace(this.ParkingSpaceID_Ed,this.parkSpaceForm.value).subscribe({
      next:(res:IResponse)=>{
             debugger;
             alert(res.message);
            //  this.ResetForm();
             //navigate to view my listing comp
           this.router.navigateByUrl('/owner-listing');
      },
      error:(err:any)=>{

      }
    });
    this.subscription.push(s1);
     this.isEditmode=false;
  }
  OnSave() {
    debugger;
    this.UpdateFormcontrols();
    const data = this.parkSpaceForm.value;
   let s1= this.http.PostParkingSpace(data).subscribe({
      next: (res: IResponse) => {
        debugger;
        alert(res.message);
        // this.ResetForm();
      },
      error: (err: any) => {

      }
    });
    this.subscription.push(s1);
 }
   ngOnDestroy(): void {
    this.subscription.forEach(s=>s.unsubscribe());
  }

}
