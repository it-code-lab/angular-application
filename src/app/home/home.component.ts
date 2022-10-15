import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: any ;
  maxPrice:any;

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }

  getProducts(){
    this.products = this.ps.getProducts;
  }


}
