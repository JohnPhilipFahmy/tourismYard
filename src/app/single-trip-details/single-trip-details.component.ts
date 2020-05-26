import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-trip-details',
  templateUrl: './single-trip-details.component.html',
  styleUrls: ['./single-trip-details.component.css']
})
export class SingleTripDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  content2="- 9:00 AM";
  content=
   "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary";
  
  tabsofDays: any[] = [
  
    {
      title: 'Day 1',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    },
    {
      title: 'Day 2',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    },
    {
      title: 'Day 3',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    },
    {
      title: 'Day 4',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    },
    {
      title: 'Day 5',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    }, {
      title: 'Day 6',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    },
    {
      title: 'Day 7',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    },
    {
      title: 'Day8',
      content1:this.content,
      content2:this.content2,
      customClass: 'customClass'
    }
   
  ];
  tabs: any[] = [
  
    {
      title: 'Hotels',
      content: 'some hotels details',
      customClass: 'customClass'
    },
    {
      title: 'Location',
      content: 'some Location details',
      customClass: 'customClass'
    },
    {
      title: 'Contacts',
      content: 'some Contacts details',
      customClass: 'customClass'
    }
  ];
  
 
  
}
