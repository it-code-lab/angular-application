import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public getProducts: Product[] = [
    new Product(1, 'ProductA', 10),
    new Product(2, 'ProductB', 100),
    new Product(3, 'ProductC', 500),
    new Product(4, 'ProductC', 900),
    new Product(5, 'ProductC', 1200),
    new Product(6, 'ProductC', 1500),
    new Product(7, 'ProductC', 5000),
  ]
}
