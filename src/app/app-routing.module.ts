import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'add-company', component: AddCompanyComponent, canActivate: [AuthGuard] },
  { path: 'update-company', component: UpdateCompanyComponent, canActivate: [AuthGuard] },
  { path: 'products-list', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'update-product', component: UpdateProductComponent, canActivate: [AuthGuard] },
  { path: 'view-products', component: ViewProductsComponent},
  { path: 'view-cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
