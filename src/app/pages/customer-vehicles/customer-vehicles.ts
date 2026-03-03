import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { IResponse } from '../../models/interface/IResponse';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Vehicles } from '../../core/service/customer/vehicles';
import { Auth } from '../../core/service/auth';
import { Car } from '../../core/service/car';

@Component({
  selector: 'app-customer-vehicles',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-vehicles.html',
  styleUrl: './customer-vehicles.css',
})
export class CustomerVehicles implements OnInit, OnDestroy {
  vehicleForm: FormGroup = new FormGroup({
    vehicleId: new FormControl(0),
    userId: new FormControl(0),
    vehicleNumber: new FormControl(''),
    vehicleBrand: new FormControl(''),
    vehicleModel: new FormControl(''),
    carSizeId: new FormControl(0),
    createdDate: new FormControl(new Date())
});
  carList = signal<any[]>([]);
  vehiclesList = signal<any[]>([]);
  vehicleSrv=inject(Vehicles);
   authSrv=inject(Auth);
   carsrv=inject(Car);

  IsUpdate: boolean = false;

  subscription:Subscription[]=[];

  ngOnInit(): void {
    this.GetAllVehicles();
 

   let s= this.carsrv.getcarSizes().subscribe({
      next: (res: any) => {
        this.carList.set(res.data);
      },
      error: (error: any) => {
        debugger;
      }
    });

    this.subscription.push(s);
  }
  constructor( ) {

  }
// GetAllvehicle(){
//   this.vehicleSrv.getAllvehicles().subscribe({
//     next:(res:IResponse)=>{
//       console.log('vehicles', res.data);
//       this.vehiclesList.set([...res.data]);
//     }
//   });
// }
// AddVehicle(){
//   this.PatchValues();
//   const formValue = this.vehicleForm.value;
//   this.vehicleSrv.Addvehicle(formValue).subscribe({
//     next:(res:IResponse)=>{
//       if(res.result){
//          alert(res.message);
//       }else{
//         alert(res.message);
//       }
//       this.GetAllvehicle();
//     },
//   })
// }
// UpdateCuVehicle(){
// this.vehicleSrv.updatevehicle(this.vehicleForm.value.vehicleId, this.vehicleForm.value).subscribe({
//   next:(res:IResponse)=>{
//     alert(res.message);
//     this.GetAllvehicle();
    
//   },
//   error:(err:any)=>{
//     alert(err.error.message);
//   }
// })
// }
//  PatchValues() {
//     debugger;
//     const UserId = this.authSrv.getUserId();
//     this.vehicleForm.controls['userId'].patchValue(UserId);
//   }
// OnEdit(id: number) {
//     this.IsUpdate = true;

//    let s= this.vehicleSrv.getselectvehicleByid  (id).subscribe({
//       next: (res: any) => {
//         debugger;
//         this.vehicleForm.patchValue(res.data);
//       },
//       error: (err: any) => {
//         debugger;
//       }
//    })
//   this.subscription.push(s);
//   }
//   ngOnDestroy(): void {
//     this.subscription.forEach((s=>s.unsubscribe()));
//   }

  PatchValues() {
    debugger;
    const UserId = this.authSrv.getUserId();
    this.vehicleForm.controls['userId'].patchValue(UserId);
  }
  AddVehicle() {
    debugger;

    this.PatchValues();
    const data = this.vehicleForm.value;


    let s= this.vehicleSrv.Addvehicle(data).subscribe({
      next: (res: IResponse) => {
        debugger;
        alert(res.message);
        this.ResetFormcontrols();

        this.GetAllVehicles();
      },
      error: (err: any) => {

      }
    })

    this.subscription.push(s);
  }
  ResetFormcontrols() {
    this.vehicleForm.reset();
  }
  OnEdit(id: number) {
    this.IsUpdate = true;

   let s= this.vehicleSrv.getselectvehicleByid(id).subscribe({
      next: (res: any) => {
        debugger;
        this.vehicleForm.patchValue(res.data);
      },
      error: (err: any) => {
        debugger;
      }
    })
  this.subscription.push(s);
  }
 UpdateCuVehicle() {

    debugger;
    const data = this.vehicleForm.value;
    const vId = this.vehicleForm.controls['vehicleId'].value
   let s=  this.vehicleSrv.updatevehicle(vId, data).subscribe({
      next: (res: any) => {
        debugger;
        alert(res.message);
        this.ResetFormcontrols();
        this.GetAllVehicles();
      }
    })
  this.subscription.push(s);

    this.IsUpdate = false;
  }
  DeleteVehicle() {

  }
  GetAllVehicles() {
  let s=  this.vehicleSrv.getAllvehicles().subscribe({
      next: (res: IResponse) => {
        debugger;
        this.vehiclesList.set(res.data);
      }
    })

    this.subscription.push(s);
  }
  ngOnDestroy(): void {
    this.subscription.forEach((s=>s.unsubscribe()));
  }

}
