import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { IResponse } from '../../models/interface/IResponse';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Vehicles } from '../../core/service/customer/vehicles';
import { Auth } from '../../core/service/auth';
import { Car } from '../../core/service/car';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { MyCar } from '../../models/car';

@Component({
  selector: 'app-customer-vehicles',
  imports: [ReactiveFormsModule, CommonModule],
=======

@Component({
  selector: 'app-customer-vehicles',
  imports: [ReactiveFormsModule],
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
  templateUrl: './customer-vehicles.html',
  styleUrl: './customer-vehicles.css',
})
export class CustomerVehicles implements OnInit, OnDestroy {
<<<<<<< HEAD
  carList = signal<any[]>([]);
  vehiclesList = signal<any[]>([]);

  IsUpdate: boolean = false;

  subscription: Subscription[] = [];

  ngOnInit(): void {

    this.GetAllVehicles();

    let s = this.carSer.getcarSizes().subscribe({
=======
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
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
      next: (res: any) => {
        this.carList.set(res.data);
      },
      error: (error: any) => {
        debugger;
      }
    });

    this.subscription.push(s);
  }
<<<<<<< HEAD
  constructor(private vehSer: Vehicles, private carSer: Car, private authSer: Auth) {
    this.GetAllVehicles()

  }

  PatchValues() {
    debugger;
    const UserId = this.authSer.getUserId();
    this.vehicleForm.controls['userId'].patchValue(UserId);
  }



  vehicleForm: FormGroup = new FormGroup({
    vehicleId: new FormControl(0),
    userId: new FormControl(0),
    vehicleNumber: new FormControl(''),
    vehicleBrand: new FormControl(''),
    vehicleModel: new FormControl(''),
    carSizeId: new FormControl(0),
    createdDate: new FormControl(new Date())
  });

=======
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
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
  AddVehicle() {
    debugger;

    this.PatchValues();
    const data = this.vehicleForm.value;


<<<<<<< HEAD
    let s = this.vehSer.Addvehicle(data).subscribe({
=======
    let s= this.vehicleSrv.Addvehicle(data).subscribe({
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
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
<<<<<<< HEAD

  ResetFormcontrols() {
    this.vehicleForm.reset();
  }

  OnEdit(id: number) {
  this.IsUpdate = true;

  let s = this.vehSer.getselectvehicleByid(id).subscribe({
    next: (res: any) => {
      this.vehicleForm.patchValue(res.data);
    },
    error: (err: any) => {
      console.log(err);
    }
  });

  this.subscription.push(s);
}


  UpdateVehicle() {
=======
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
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7

    debugger;
    const data = this.vehicleForm.value;
    const vId = this.vehicleForm.controls['vehicleId'].value
<<<<<<< HEAD
    let s = this.vehSer.updatevehicle(vId, data).subscribe({
=======
   let s=  this.vehicleSrv.updatevehicle(vId, data).subscribe({
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
      next: (res: any) => {
        debugger;
        alert(res.message);
        this.ResetFormcontrols();
        this.GetAllVehicles();
      }
    })
<<<<<<< HEAD
    this.subscription.push(s);

    this.IsUpdate = false;
  }



 DeleteVehicle(id: number) {
  const isDelete = confirm('Are you sure?');
  if (!isDelete) return;

  this.vehSer.deletevehicle(id).subscribe({
    next: (res: IResponse) => {
      if (res.result) {
        alert('Deleted successfully');
        this.GetAllVehicles();
      }
    }
  });
}

  GetAllVehicles() {
    let s = this.vehSer.getAllvehicles().subscribe({
=======
  this.subscription.push(s);

    this.IsUpdate = false;
  }
  DeleteVehicle() {

  }
  GetAllVehicles() {
  let s=  this.vehicleSrv.getAllvehicles().subscribe({
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
      next: (res: IResponse) => {
        debugger;
        this.vehiclesList.set(res.data);
      }
    })

    this.subscription.push(s);
  }
<<<<<<< HEAD


  ngOnDestroy(): void {
    this.subscription.forEach((s => s.unsubscribe()));
  }
}
=======
  ngOnDestroy(): void {
    this.subscription.forEach((s=>s.unsubscribe()));
  }

}
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
