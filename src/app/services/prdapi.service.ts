import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/Iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PrdapiService {
  editProdut = new EventEmitter<IProduct>();
  constructor(private httpClient: HttpClient) {}

  getproductByCategory(cat: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.baseUrl}/products?categoryId=${cat}`
    );
  }

  getAllProducts(): Observable<IProduct[]> {
    console.log('getting all');

    return this.httpClient.get<IProduct[]>('http://localhost:3000/products');
  }

  getPrdById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `http://localhost:3000/products/${id}`
    );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(
      `http://localhost:3000/products/${product.id}`,
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
      `http://localhost:3000/products/${id}`
    );
  }

  // products:Observable[]

  // performFilterByName(filterBy: string): IProduct[] {
  //   filterBy=filterBy.toLocaleLowerCase();
  //   return this.products.filter((prd: IProduct) =>
  //     prd.name.toLocaleLowerCase().includes(filterBy)
  //   );
  // }

  // performFilterByPrice(flt: number): IProduct[] {

  //   return this.products.filter((prd) => {
  //    return prd.price>flt
  //   });
  // }
}
