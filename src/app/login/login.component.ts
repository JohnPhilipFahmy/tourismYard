import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

  }
  ngOnDestroy() {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
  }
}
