import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject, combineLatest, map} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-filtered-products-subject',
  templateUrl: './filtered-products-subject.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsSubjectComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.gatAll(),
    this.category$
  ]).pipe(map(([products, category]: [ProductModel[], string]) => {
    return products.filter(product => product.category === category);
  }));

  constructor(private _productsService: ProductsService, private _categoriesService: CategoriesService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category);
    console.log("subject changed to " + category)
  }

}

