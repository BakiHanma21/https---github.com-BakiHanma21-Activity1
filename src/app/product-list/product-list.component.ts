import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService, private loggerService: LoggerService) {}

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.loggerService.log('Fetched products');
    });
  }
}
