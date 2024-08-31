import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl(''),
    });
  }
  

  onSubmit() {
    if (this.productForm.valid) {
      this.apiService.addProduct(this.productForm.value).subscribe((response: any) => {
        console.log('Product added', response);
      });
    }
  }
}
