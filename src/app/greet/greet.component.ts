import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  response: any;
  constructor(private svc: MessageService) { }

  ngOnInit(): void {
    this.response = this.svc.getMessage();
  }

}
