import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  countrey;
  Capital;
  fromDate;
  toDate;
  persons;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.queryParamMap
   .subscribe(prams=>{
     this.countrey=prams.get('countrey');
     this.Capital=prams.get('Capital');
     this.fromDate=prams.get('fromDate');
     this.toDate=prams.get('toDate');
     this.persons=prams.get('persons');


    });
  }
}
