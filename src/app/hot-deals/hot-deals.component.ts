import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.css']
})
export class HotDealsComponent implements OnInit {
  trips = [
    {id: 1, name: 'trip 1', description: ''},
    {id: 2, name: 'trip 2', description: ''},
    {id: 3, name: 'trip 3', description: ''},
    // {id: 4, name: 'trip 4', description: ''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
