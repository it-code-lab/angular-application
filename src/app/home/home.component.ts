import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: any ;
  maxPrice:any;

  constructor(private ps:ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getProducts(){
    this.products = this.ps.getProducts;
  }

  goToPipeDemo(){
    this.router.navigate(['pipedemo']);
  }
}
