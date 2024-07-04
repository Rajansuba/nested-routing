import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service'; // Import your category service

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  category: any; // Define the category object

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    // Get the category ID from the route parameters
    const categoryId = this.route.snapshot.paramMap.get('id');

    // Fetch the category details using the category ID
    this.category = this.categoryService.getCategoryById(Number(categoryId));
  }
}
