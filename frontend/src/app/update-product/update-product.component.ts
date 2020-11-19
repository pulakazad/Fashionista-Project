import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { CompanyService } from '../services/company.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  companies: Company[];

  productId: string;
  productName: string;
  productPrice: number;
  imageURL: string;
  companyId: string;

  //temp variable
  result: string;

  constructor(private productService: ProductService, private companyService: CompanyService, private location: Location, private router: Router) { }


  ngOnInit(): void {
    console.log(this.location.getState());
    if (this.location.getState()['id'] != null) {
      this.productId = this.location.getState()['id'];
      this.productName = this.location.getState()['name'];
      this.productPrice = this.location.getState()['price'];
      this.imageURL = this.location.getState()['imageURL'];
      this.companyId = this.location.getState()['companyId'];

      this.companyService.getCompanies().subscribe(result => {
        this.companies = result;
      })
    }
  }

  updateProduct(form: any): void {
    this.result = form["productName"]

    let myProduct = new Product();
    myProduct.pname = form["productName"];
    console.log("PRODUCT NAME: ", form["productName"])
    myProduct.imageURL = form["imageURL"];
    myProduct.price = form["price"];
    myProduct.companyID = form["company"]
    
    if (this.productId != null) {
      this.productService.updateProductById(myProduct, this.productId).subscribe(data =>{
        console.log(data);
        alert("You have updated the Product Details");
        this.router.navigate(['/products-list']);
      })
    }

  }

}
