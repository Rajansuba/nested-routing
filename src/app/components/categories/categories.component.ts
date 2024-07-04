import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'; // Import your category service

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories?: any[]; // Define the categories array

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Fetch the list of categories from your service
    this.categories = this.categoryService.getCategories();
  }
}
