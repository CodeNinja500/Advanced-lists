import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductsRoutingComponent } from './components/filtered-products-routing/filtered-products-routing.component';
import { FilteredProductsSubjectComponent } from './components/filtered-products-subject/filtered-products-subject.component';
import { FilteredProductsRoutingComponentModule } from './components/filtered-products-routing/filtered-products-routing.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { FilteredProductsSubjectComponentModule } from './components/filtered-products-subject/filtered-products-subject.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products/:category', component: FilteredProductsRoutingComponent },
    { path: 'products', component: FilteredProductsSubjectComponent }
  ]), FilteredProductsRoutingComponentModule, ProductsServiceModule, CategoriesServiceModule, FilteredProductsSubjectComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
