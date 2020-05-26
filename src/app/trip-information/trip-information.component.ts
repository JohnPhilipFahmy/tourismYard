import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-information',
  templateUrl: './trip-information.component.html',
  styleUrls: ['./trip-information.component.css']
})
export class TripInformationComponent implements OnInit {
  isEmpty = true;
  price = "350";
  numOfRivew = "220";
  numOfDays = '5 ';
  place = "Africia";
  fromDate = "15/5/2020";
  ToDate = "20/5/2020";
  
  TripDetails=[
    {TripDetail : "2 Day at conrad"},
    {TripDetail : "1 Day at Desert"},
    {TripDetail : "4 Days at pyramid visite with camel"},
    {TripDetail : "1 Days at wadi el hitan bed and brackfast"}
  ]
  
  max: number = 5;
  rate: number = 4;
  isReadonly: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  liked() {
    if (this.isEmpty === true) {
      this.isEmpty = false;
    }
    else { this.isEmpty = true }

  }
}
