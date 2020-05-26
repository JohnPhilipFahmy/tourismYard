import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  companyName="company name";
  rate: number = 3;
  isReadonly: boolean = true;
  location="Location"
  numOfRivew="220";
  followers="1030";
  description="Small description about the comapany  if  thay  want to talk about they history and make them an edg of competion Small description about the  comapany if thay want to talk about they history and make them an edg of competion Small description about the comapany if thay want to talk about they history and make them an edg of competion";
  
}
