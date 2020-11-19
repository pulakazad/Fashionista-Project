import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[];
  myProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // let cart = JSON.parse(localStorage.getItem('cart'));
    // console.log(cart)
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    })
  }

  addProductId(event, productId): void {
    console.log("Product ID added to cart: ", productId);

    if (productId) {

      var matchProduct: Product = {
        _id: "",
        companyID: "",
        imageURL: "",
        pname: "",
        price: 0
      }

      this.productService.getProductById(productId).subscribe(data => {
        console.log("DATA: ", data);
        matchProduct = <Product>data;
        console.log(matchProduct.pname)
        // matchProduct._id = data._id;
        // matchProduct.companyID=data.companyID;
        // matchProduct.imageURL = data.imageURL;
        // matchProduct.pname = data.pname;
        // matchProduct.price = data.price;
        if (matchProduct.pname != null) {
          console.log("MY PRODUCT")
          console.log(matchProduct.pname)
        }

        var item: Item = {
          product: matchProduct,
          quantity: 1
        }

        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.product._id == productId) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }


      })



      alert("Added item to Cart!")
    }



  }
  

}
