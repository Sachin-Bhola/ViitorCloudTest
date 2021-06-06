import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productSubscription!: Subscription;
  productList!: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService.getALLProducts().subscribe(res => {
      this.productList = res;
    });
  }


  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }

}
