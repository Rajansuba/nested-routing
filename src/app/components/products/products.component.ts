import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Import your product service

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products?: any[]; // Define the products array

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch the list of products from your service
    this.products = this.productService.getProducts();
  }
}

