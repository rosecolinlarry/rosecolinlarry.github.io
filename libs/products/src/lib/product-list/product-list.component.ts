import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'lib-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, ProductsComponent]
})
export class ProductListComponent {}
