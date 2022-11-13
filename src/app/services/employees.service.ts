import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseModel} from '../models/api-response.model';
import {EmployeeResponseModel} from '../models/employee-response.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ApiResponseModel<EmployeeResponseModel[]>> {
    return this._httpClient.get<ApiResponseModel<EmployeeResponseModel[]>>('https://dummy.restapiexample.com/api/v1/employees');
  }
}
