import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'; // Import your product service

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any; // Define the product object

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route parameters
    const productId = this.route.snapshot.paramMap.get('id');

    // Fetch the product details using the product ID
    this.product = this.productService.getProductById(Number(productId));
  }
}
