import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
})
export class PersonCardComponent implements OnInit {
  traveller = {
    personName: 'John Philip',
    rate: 3,
    isReadonly: true,
    tripsNum: '50',
    following: '500',
    followers: '200',
    description:
      'Small description about the comapany  if  thay  want to talk about they history and make them an edg of competion Small description about the  comapany if thay want to talk about they history and make them an edg of competion Small description about the comapany if thay want to talk about they history and make them an edg of competion',
  } as any;

  constructor() {}

  ngOnInit(): void {}
}
