import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  idParm: any = null;
  qryParm: any = null;
  dateProp: Date = new Date();
  stringProp: string = "Hello World";
  piProp: number = 3.14159265359;
  jsonProp: any = { name: 'Rob', age: '35', address: { Line1: '100 First Steer', Line2: 'State K' } };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idParm = params['id']
      //console.log(this.idParm);
    });

    this.route.queryParams.subscribe(params => {
      this.qryParm = params['id']
      //console.log(this.qryParm);
    });
  }

}
