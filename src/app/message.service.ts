import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  API_URL: string;
  constructor() {
    this.API_URL = "some_url";
  }

  getMessage() {
    //Call API to get the message based on the time of the year. Like "Happy New Year", "Happy Thanksgiving", "Merry Christmas". Sample response: {message: "Happy New Year"}
    //return this.http.get(this.API_URL);
    return {message: "Happy Birthday"};
  }
}
