import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {EmployeeResponseModel} from '../../models/employee-response.model';
import {ApiResponseModel} from '../../models/api-response.model';
import {AgeRangeSelectModel} from '../../models/age-range-select.model';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly employees$: Observable<EmployeeResponseModel[]> = this._employeesService.getAll().pipe(map((response: ApiResponseModel<EmployeeResponseModel[]>) => {
    return response.data.map((data: EmployeeResponseModel) => {
      return {
        employee_age: data.employee_age,
        employee_name: data.employee_name,
        employee_salary: data.employee_salary,
        profile_image: data.profile_image,
        id: data.id
      }
    })
  }));
  public ageRanges: Observable<AgeRangeSelectModel[]> = of([
    {display: "All", low: 0, high: 200},
    {display: "0-20", low: 0, high: 20},
    {display: "21-30", low: 21, high: 30},
    {display: "31-40", low: 31, high: 40},
    {display: "41-50", low: 41, high: 50},
    {display: "51-100", low: 51, high: 100},
  ])
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();

  public orders: Observable<string[]> = of(['asc', 'desc']);
  private _ageRangeSubject: BehaviorSubject<AgeRangeSelectModel> = new BehaviorSubject<AgeRangeSelectModel>({
    display: "all",
    low: 0,
    high: 200
  });
  public ageRange$: Observable<AgeRangeSelectModel> = this._ageRangeSubject.asObservable();

  constructor(private _employeesService: EmployeesService) {
  }

  selectOrder(order: string): void {
    this._orderSubject.next(order);
    console.log("new order selected: " + order)
  }

  selectAgeRange(range: AgeRangeSelectModel): void {
    this._ageRangeSubject.next(range);
    console.log("new age range selected: "+ range.low + "-" + range.high);

  }
}
