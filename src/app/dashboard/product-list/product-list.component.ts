import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/app/model/models';
import { ProductService } from './product.service';
import { debounceTime, delay, distinctUntilChanged, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productSubscription!: Subscription;
  productList!: Array<product>;

  constructor(private productService: ProductService) { }

  searchField!: FormControl;

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(500),
      distinctUntilChanged(), startWith('')).subscribe(data => {
        this.productSubscription = this.productService.getALLProductById(data).subscribe(prod => {
          if (prod?.length) {
            this.productList = prod
          } else {
            this.productList = [prod]
          }
        })
      });
  }


  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }

}
