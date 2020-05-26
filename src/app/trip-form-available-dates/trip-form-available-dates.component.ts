import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-form-available-dates',
  templateUrl: './trip-form-available-dates.component.html',
  styleUrls: ['./trip-form-available-dates.component.css']
})
export class TripFormAvailableDatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  days=[
    "1", "2","3","4", "5", "6","7","8","9","10","11","12","13",
    "14","15","16","17","18","19","20","21","22","23","24","25",
    "26","27","28","29","30"
  ];
  months=[
    "1", "2","3","4", "5", "6","7","8","9","10","11","12"];
    years=["2020","2021","2022","2023","2024","2025","2026","2027",];
}
