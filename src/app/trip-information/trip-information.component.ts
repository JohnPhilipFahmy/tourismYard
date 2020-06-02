import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-information',
  templateUrl: './trip-information.component.html',
  styleUrls: ['./trip-information.component.css'],
})
export class TripInformationComponent implements OnInit {
  tripsInfo = [
    {
      id: '10',
      Like: true,
      price: '550',
      numOfRivew: '220',
      place: 'Africia',
      fromDate: '15/5/2020',
      toDate: '20/5/2020',
      numOfDays: '5 ',
      rate: 3,
      TripDetail1: '2 Day at conrad',
      TripDetail2: '1 Day at Desert',
      TripDetail3: '4 Days at pyramid visite with camel',
      TripDetail4: '1 Days at wadi el hitan bed and brackfast',
    },
    {
      id: '10',
      Like: false,
      price: '350',
      numOfRivew: '220',
      place: 'Africia',
      fromDate: '15/5/2020',
      toDate: '20/5/2020',
      numOfDays: '5 ',
      rate: 3,
      TripDetail1: '2 Day at conrad',
      TripDetail2: '1 Day at Desert',
      TripDetail3: '4 Days at pyramid visite with camel',
      TripDetail4: '1 Days at wadi el hitan bed and brackfast',
    },
  ];

  rate = this.tripsInfo[0].rate;

  max = 5;

  isReadonly = true;

  constructor() {}

  ngOnInit(): void {}

  liked(trip) {
    trip.Like = !trip.Like;
  }
}
