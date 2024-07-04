import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Import your product service

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products?: any[]; // Define the products array

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch the list of products from your service
    this.products = this.productService.getProducts();
  }
}
