import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {PaginatorModel} from '../../models/paginator.model';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';
import {PageEvent, MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent {
  private _pageSettingsSubject: BehaviorSubject<PaginatorModel> = new BehaviorSubject<PaginatorModel>({
    page: 0,
    perPage: 5,
    limit: 100
  });
  public paginator$: Observable<PaginatorModel> = this._pageSettingsSubject.asObservable();

  readonly beers$: Observable<BeerModel[]> = this.paginator$.pipe(switchMap(data => this._beersService.getBeers(data.page + 1, data.perPage)));

  constructor(private _beersService: BeersService) {
  }

  onPageChange(e: PageEvent, currPage: number, currPageSize:number): void {
    this._pageSettingsSubject.next({
      page: e.pageIndex,
      perPage: e.pageSize,
      limit: e.length
    })
  }
}
