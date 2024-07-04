import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 150 },
    { id: 4, name: 'Product 4', price: 300 },
  ];

  constructor() {}

  // Simulate fetching a list of products
  getProducts() {
    return this.products;
  }

  // Simulate fetching a single product by ID
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
