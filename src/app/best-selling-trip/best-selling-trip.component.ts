import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-best-selling-trip',
  templateUrl: './best-selling-trip.component.html',
  styleUrls: ['./best-selling-trip.component.css']
})
export class BestSellingTripComponent implements OnInit {
  @Input() tripData;
  constructor() { }

  ngOnInit(): void {
  }

}
