import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-deals-trip',
  templateUrl: './hot-deals-trip.component.html',
  styleUrls: ['./hot-deals-trip.component.css']
})
export class HotDealsTripComponent implements OnInit {
  @Input() tripData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.tripData);
  }

}
