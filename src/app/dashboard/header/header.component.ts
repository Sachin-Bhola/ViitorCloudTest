import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.dialog.open(AddProductComponent, {
      width: '30rem',
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
