import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  firstNum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showMsg() {
    alert("Event Triggered")
  }

}
