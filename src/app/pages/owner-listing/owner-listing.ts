import { Component, OnInit, signal } from '@angular/core';
import { SpacingList } from '../../core/service/owner/spacing-list';
import { Router, RouterLink } from '@angular/router';
 
import { CommonModule } from '@angular/common';
import { ParkingspaceService } from '../../core/service/parkingspace-service';

@Component({
  selector: 'app-owner-listing',
  imports: [RouterLink,CommonModule,],
  templateUrl: './owner-listing.html',
  styleUrl: './owner-listing.css',
})
export class OwnerListing implements  OnInit {
  
  spaceLists=signal<any[]>([]);

  constructor(private http:SpacingList,private router:Router,private api:ParkingspaceService){

  }
   GetListings(){
     this.http.GetSpaceListings().subscribe({
      next:(res:any)=>{
       debugger;
        this.spaceLists.set(res.data);
      },
      error:(err:any)=>{
  debugger;
      }
    })
  }
  ngOnInit(): void {
    debugger;
   this.GetListings();
  }
  OnEdit(id:number){
    alert(id);
    this.router.navigateByUrl("/park-space/"+id);
  }
  OnDelete(id:number){
    debugger;

    this.api.DeleteParkingSpace(id).subscribe({
      next:(res:any)=>{
         alert(res.message);
         this.GetListings();
      },
      error:(err:any)=>{
        alert(err.error.message);
      }
    })
  }

}
