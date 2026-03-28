<<<<<<< HEAD
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ParkingspaceService } from '../../core/service/parkingspace-service';
import { Car } from '../../core/service/car';
import { SearchSpace } from '../../models/spacesearch';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-places',
  imports: [ReactiveFormsModule,RouterLink,],
  templateUrl: './search-places.html',
  styleUrl: './search-places.css',
})
export class SearchPlaces implements OnInit {
  carlist = signal<any[]>([]);
  parkingSpace = signal<any[]>([]);
  carobj = inject(Car)
  parksrv = inject(ParkingspaceService)



  ngOnInit(): void {
    this.GetSpaces()

    this.carobj.getcarSizes().subscribe({
      next: (res: any) => {
        this.carlist.set(res.data);
      },
      error: (err: any) => {

      }
    });

  }
  GetSpaces() {

    this.parksrv.GetAllSpaces().subscribe({
      next: (res: any) => {
        this.parkingSpace.set(res.data);
      },
      error: (err: any) => {

      }
    })
  }





  constructor( ) {

  }

  searchobj: SearchSpace = new SearchSpace();


  spaceForm: FormGroup = new FormGroup({
    city: new FormControl(''),
    carSizeId: new FormControl(''),
    maxPricePerMonth: new FormControl(''),
    isAvailable: new FormControl(null)
  });



  OnSearch() {
    debugger;

    if (this.spaceForm.controls['carSizeId'].value == '') {
      this.spaceForm.controls['carSizeId'].patchValue(null);
    }
    if (this.spaceForm.controls['maxPricePerMonth'].value == '') {
      this.spaceForm.controls['maxPricePerMonth'].patchValue(null);
    }

    const data = this.spaceForm.value;

    this.parksrv.SearchParkingSpaces(data).subscribe({
      next: (res: any) => {
        debugger;
        this.parkingSpace.set(res.data);
      },
      error: (err: any) => {

      }
    })
  }
}
 



=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-places',
  imports: [],
  templateUrl: './search-places.html',
  styleUrl: './search-places.css',
})
export class SearchPlaces {

}
>>>>>>> 60c0c0c6ce7f742edac611dd431c76a1c02fe6e7
