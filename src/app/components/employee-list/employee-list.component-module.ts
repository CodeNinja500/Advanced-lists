import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatGridListModule } from '@angular/material/grid-list';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule, MatGridListModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
