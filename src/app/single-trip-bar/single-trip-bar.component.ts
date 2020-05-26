import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-trip-bar',
  templateUrl: './single-trip-bar.component.html',
  styleUrls: ['./single-trip-bar.component.css']
})
export class SingleTripBarComponent implements OnInit {
  isEmpty=true;
  constructor() { }

  ngOnInit(): void {
  }
  numOfDays=9;
  TripPlace="Africa Ltinerary";
  numOfRivew=220
  liked(){
    if(this.isEmpty===true)
    {
      this.isEmpty=false;
    }
    else{this.isEmpty=true}
    
      }
}
