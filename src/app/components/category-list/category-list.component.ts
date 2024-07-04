import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'; // Import your category service

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories?: any[]; // Define the categories array

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Fetch the list of categories from your service
    this.categories = this.categoryService.getCategories();
  }
}
