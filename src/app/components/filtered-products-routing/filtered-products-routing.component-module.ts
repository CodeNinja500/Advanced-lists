import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductsRoutingComponent } from './filtered-products-routing.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterLink],
  declarations: [FilteredProductsRoutingComponent],
  providers: [],
  exports: [FilteredProductsRoutingComponent]
})
export class FilteredProductsRoutingComponentModule {
}
