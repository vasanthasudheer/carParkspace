import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { IResponse } from '../../models/interface/IResponse';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Vehicles } from '../../core/service/customer/vehicles';
import { Auth } from '../../core/service/auth';
import { Car } from '../../core/service/car';
import { CommonModule } from '@angular/common';
import { MyCar } from '../../models/car';

@Component({
  selector: 'app-customer-vehicles',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customer-vehicles.html',
  styleUrl: './customer-vehicles.css',
})
export class CustomerVehicles implements OnInit, OnDestroy {
  carList = signal<any[]>([]);
  vehiclesList = signal<any[]>([]);

  IsUpdate: boolean = false;

  subscription: Subscription[] = [];

  ngOnInit(): void {

    this.GetAllVehicles();

    let s = this.carSer.getcarSizes().subscribe({
      next: (res: any) => {
        this.carList.set(res.data);
      },
      error: (error: any) => {
        debugger;
      }
    });

    this.subscription.push(s);
  }
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

  AddVehicle() {
    debugger;

    this.PatchValues();
    const data = this.vehicleForm.value;


    let s = this.vehSer.Addvehicle(data).subscribe({
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

    debugger;
    const data = this.vehicleForm.value;
    const vId = this.vehicleForm.controls['vehicleId'].value
    let s = this.vehSer.updatevehicle(vId, data).subscribe({
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
      next: (res: IResponse) => {
        debugger;
        this.vehiclesList.set(res.data);
      }
    })

    this.subscription.push(s);
  }


  ngOnDestroy(): void {
    this.subscription.forEach((s => s.unsubscribe()));
  }
}