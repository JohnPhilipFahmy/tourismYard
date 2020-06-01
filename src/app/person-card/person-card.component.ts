import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  personName="John Philip";
  rate: number = 3;
  isReadonly: boolean = true;
  tripsNum='50';
  following='500';
  followers="200";
  description="Small description about the comapany  if  thay  want to talk about they history and make them an edg of competion Small description about the  comapany if thay want to talk about they history and make them an edg of competion Small description about the comapany if thay want to talk about they history and make them an edg of competion";
  
}
