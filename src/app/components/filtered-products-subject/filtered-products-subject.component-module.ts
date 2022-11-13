import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductsSubjectComponent } from './filtered-products-subject.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [FilteredProductsSubjectComponent],
  providers: [],
  exports: [FilteredProductsSubjectComponent]
})
export class FilteredProductsSubjectComponentModule {
}
