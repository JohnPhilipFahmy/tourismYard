import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {
  trips = [
    {id: 1, name: 'best selling trip 1'},
    {id: 2, name: 'best selling trip 2'},
    {id: 3, name: 'best selling trip 3'},
    {id: 4, name: 'best selling trip 4'},
    {id: 5, name: 'best selling trip 5'},
    {id: 6, name: 'best selling trip 6'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
