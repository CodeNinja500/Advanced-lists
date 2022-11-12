import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsRoutingComponent } from './components/filtered-products-routing/filtered-products-routing.component';
import { FilteredProductsRoutingComponentModule } from './components/filtered-products-routing/filtered-products-routing.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesServiceModule } from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductsRoutingComponent }]), FilteredProductsRoutingComponentModule, ProductsServiceModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
