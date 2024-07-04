import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
  ];

  constructor() {}

  // Simulate fetching a list of categories
  getCategories() {
    return this.categories;
  }

  // Simulate fetching a single category by ID
  getCategoryById(id: number) {
    return this.categories.find((category) => category.id === id);
  }
}
