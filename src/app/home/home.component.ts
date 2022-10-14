import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ticketsCost: any[] = [{ destination: 'Florida', cost: 800 }, { destination: 'Las Vegas', cost: 600 }, { destination: 'New York', cost: 200 }, { destination: 'Texas', cost: 200 }];
  selectedTripCost: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showMsg() {
    alert("Event Triggered")
  }

}
