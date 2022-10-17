import { TestBed } from '@angular/core/testing';
import { Product } from './product';
import { ProductService } from './product.service';

describe('ProductService Test Suite', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should return an Array', () => {
    expect(service.getProducts).toBeInstanceOf(Array);
  });

  it('Array length should be > 0', () => {
    expect(service.getProducts.length).toBeGreaterThan(0);
  });

  it('Array element should be instance of Product class', () => {
    expect(service.getProducts[0]).toBeInstanceOf(Product);
  });
});
