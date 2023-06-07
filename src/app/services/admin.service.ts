import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Iuser } from '../model/iuser';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { IProduct } from '../model/Iproduct';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AdminservService {
  editProdut = new EventEmitter<IProduct>();
  constructor(private httpClient: HttpClient, private router: Router) {}

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }

  insertP(newp: IProduct): Observable<IProduct> {
    console.log(newp);

    return this.httpClient
      .post<IProduct>(`${environment.baseUrl}/products`, newp)
      .pipe(
        tap(() => {
          // Redirect to another page
          this.router.navigate(['/all']);
        })
      );
  }

  updateProd(product: IProduct): Observable<IProduct> {
    return this.httpClient.patch<IProduct>(
      `${environment.baseUrl}/products/${product.id}`,
      JSON.stringify(product),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  deleteProduct(id: number) {
    console.log(id);
    return this.httpClient.delete<IProduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
}
