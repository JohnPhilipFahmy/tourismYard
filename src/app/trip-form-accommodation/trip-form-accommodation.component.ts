import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form-accommodation',
  templateUrl: './trip-form-accommodation.component.html',
  styleUrls: ['./trip-form-accommodation.component.css']
})
export class TripFormAccommodationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  days=[
    "1", "2","3","4", "5", "6","7","8","9","10","11","12","13",
    "14","15","16","17","18","19","20","21","22","23","24","25",
    "26","27","28","29","30"
  ];
}
