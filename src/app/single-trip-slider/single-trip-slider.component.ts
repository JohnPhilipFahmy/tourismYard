import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-trip-slider',
  templateUrl: './single-trip-slider.component.html',
  styleUrls: ['./single-trip-slider.component.css']
})
export class SingleTripSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgs=[
"assets/images/SingleTripslider.jpg",
"assets/images/singleTripSlider2.jpg",
"assets/images/singleTripSlider3.jpg"


  ]
}
