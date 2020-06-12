import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-single-trip-bar',
  templateUrl: './single-trip-bar.component.html',
  styleUrls: ['./single-trip-bar.component.css'],
})
export class SingleTripBarComponent implements OnInit {
  Like = true;
  numOfDays = 9;
  TripPlace = 'Africa Ltinerary';
  numOfRivew = 220;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  liked() {
    this.Like = !this.Like;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
