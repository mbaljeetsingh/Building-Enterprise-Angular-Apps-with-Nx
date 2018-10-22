import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nxt-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  signin() {
    console.log('Signin Clicked');
  }
}
