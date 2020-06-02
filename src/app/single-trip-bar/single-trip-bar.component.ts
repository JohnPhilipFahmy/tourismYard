import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-trip-bar',
  templateUrl: './single-trip-bar.component.html',
  styleUrls: ['./single-trip-bar.component.css'],
})
export class SingleTripBarComponent implements OnInit {
  Like = true;
  numOfDays = 9;
  TripPlace = 'Africa Ltinerary';
  numOfRivew = 220;
  constructor() {}

  ngOnInit(): void {}

  liked() {
    this.Like = !this.Like;
  }
}
