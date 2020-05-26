import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-slide',
  templateUrl: './search-slide.component.html',
  styleUrls: ['./search-slide.component.css']
})
export class SearchSlideComponent implements OnInit {
  itemsPerSlide = 3;
  singleSlideOffset = true;
 
  slides = [
   
  
    {image: 'assets/images/searchSlide1.jpg'},
    {image: 'assets/images/searchSlide2.jpg'},
    {image: 'assets/images/searchSlide1.jpg'},
    {image: 'assets/images/searchSlide2.jpg'},
    {image: 'assets/images/searchSlide1.jpg'},
    {image: 'assets/images/searchSlide2.jpg'},

    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
