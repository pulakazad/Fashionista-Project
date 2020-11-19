import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { CompanyService } from '../services/company.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[]
  myCompany: Company;
  companyNames: string[];

  constructor(private productService: ProductService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result =>{
      this.products = result;
      console.log(this.products);
    })
  }

  deleteProduct(event, productId): void {

    console.log(productId)
    if (productId != null) {
      this.productService.deleteProductById(productId).subscribe(data => {
        console.log(data);
      })
      alert("You have deleted this product")
      location.reload();
    }

  }

}
