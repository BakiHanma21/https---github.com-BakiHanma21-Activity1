import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' }, // Optional: Redirect to product-list on empty path
];
