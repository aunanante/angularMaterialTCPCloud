import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  
  private categoryUrl = 'http://localhost:8080/api/test/all/categories';
                        
  private categoryUrl1 = 'http://localhost:8080/api/test/all/commerces_categories';

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable< ProductCategory[]> {

    return this.httpClient.get< ProductCategory[]>(this.categoryUrl);
  }

  getCategoryById(id: number): Observable<ProductCategory> {

    return this.httpClient.get<any>(this.categoryUrl+'/'+id)
    
  }

  getCategoryByCommerceId(id: number): Observable<ProductCategory[]> {

    return this.httpClient.get<any>(this.categoryUrl1+'/'+id)
    
  }

  /* createCategory(category: ProductCategory): Observable<any> {

    return this.httpClient.post<any>(this.categoryUrl, category);
    
  }

  updateCategory(id: number, category: ProductCategory): Observable<ProductCategory[]> {

    return this.httpClient.put<any>(this.categoryUrl+'/'+id, category);
  }

  deleteCategory(id: number): Observable<ProductCategory[]> {

    return this.httpClient.delete<any>(this.categoryUrl+'/'+id);
  } */

}
