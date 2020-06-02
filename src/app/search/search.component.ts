import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  To = 'May ,6,2020';
  from = 'May ,6,2020';

  bsDatepicker = '';
  counter = 0;
  counteries = [
    { id: 1, text: 'egypt' },
    { id: 2, text: 'Italy' },
    { id: 3, text: 'Germany' },
  ];
  spasificcounteries = [
    { id: 1, text: 'Qairo' },
    { id: 2, text: 'Roma' },
    { id: 3, text: 'Berlin' },
  ];
  selectedCountery = 'Select Countery';
  selectedSpasificCountery = 'Select Countery';
  selectedCounteryID;
  selectedSpasificCounteryId;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.queryParams);
  }

  selectCountery(countery) {
    this.selectedCountery = countery.text;
    this.selectedCounteryID = countery.id;
  }

  selectSpasificCounteries(Spasificcountery) {
    this.selectedSpasificCountery = Spasificcountery.text;
    this.selectedSpasificCounteryId = Spasificcountery.id;
  }

  increament() {
    this.counter++;
  }

  decreament() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

}
