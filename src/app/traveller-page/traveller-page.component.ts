import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-traveller-page',
  templateUrl: './traveller-page.component.html',
  styleUrls: ['./traveller-page.component.css']
})
export class TravellerPageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
