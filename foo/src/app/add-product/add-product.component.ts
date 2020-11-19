import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { CompanyService } from '../services/company.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  companies: Company[];
  result: string;

  constructor(private productService: ProductService, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies)
    })
  }

  addProduct(form: any): void {
    console.log("You submitted: ", form);
    this.result = form["productName"]

    let myProduct = new Product();
    myProduct.pname = form["productName"];
    myProduct.imageURL = form["imageURL"];
    myProduct.price = form["price"];
    myProduct.companyID = form["company"]
    console.log('COMPANY NAME')
    console.log(form["company"])
    if (this.result != null) {
      this.productService.addProduct(myProduct).subscribe(data => {
        this.result = data.msg;
        alert("You have added a new Product")
        location.reload
        this.router.navigate(['/products-list']);
      })
    }
  }
}
