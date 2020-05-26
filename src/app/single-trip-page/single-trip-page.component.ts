import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-trip-page',
  templateUrl: './single-trip-page.component.html',
  styleUrls: ['./single-trip-page.component.css']
})
export class SingleTripPageComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
   this.activeRoute.queryParamMap
   .subscribe(prams=>{
     console.log("single trip page"+prams.get('countrey'));
   
   });

    
  }

}
