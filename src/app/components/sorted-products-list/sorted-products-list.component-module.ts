import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortedProductsListComponent } from './sorted-products-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [SortedProductsListComponent],
  providers: [],
  exports: [SortedProductsListComponent]
})
export class SortedProductsListComponentModule {
}
