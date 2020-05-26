import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srearch-rating',
  templateUrl: './srearch-rating.component.html',
  styleUrls: ['./srearch-rating.component.css']
})
export class SrearchRatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x: number = 10;
  y: number = 3;
  max = 10;
  rate = 7;
  isReadonly = false;
 
  overStar: number | undefined;
  percent: number;
 
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  resetStar(): void {
    this.overStar = void 0;
  }
 
}
