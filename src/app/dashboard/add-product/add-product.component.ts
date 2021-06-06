import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product-list/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {

  addProductForm!: FormGroup;
  addProductSub!: Subscription;

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    private fb: FormBuilder,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['https://i.pravatar.cc']
    })
  }

  addProduct() {
    this.addProductSub = this.productService.addProduct(this.addProductForm.value).subscribe();
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.addProductSub?.unsubscribe();
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
