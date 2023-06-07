import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from 'src/app/model/Iproduct';
import { Iuser } from 'src/app/model/iuser';
import { AdminservService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-temp',
  templateUrl: './admin-temp.component.html',
  styleUrls: ['./admin-temp.component.scss'],
})
export class AdminTempComponent {
  paramId: string = '';
  query: string = '';

  product: IProduct = {} as IProduct;
  constructor(
    private adminserv: AdminservService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  addProduct() {
    // static data
    // let p: IProduct = {
    //   id: 15,
    //   name: 'static',
    //   quantity: 5,
    //   price: 19,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 5,
    // };

    this.adminserv.insertP(this.product).subscribe({
      next: (prod) => {
        console.log(prod);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateProduct() {
    if ((this.query = '1')) {
      this.adminserv
        .updateProd(this.product)
        .subscribe((data) => this.adminserv.editProdut.emit(data));
      this.route.navigate(['/index']);
    }
  }

  ngOnInit(): void {
    const paramId = this.router.snapshot.paramMap.get('id');
    const querys = this.router.snapshot.queryParamMap.get('mode');
    if (paramId) {
      this.paramId = paramId;
    }
    if (querys) {
      this.query = querys;
    }

    if (querys === '1') {
      if (paramId) {
        this.adminserv
          .getProductById(+paramId)
          .subscribe((data) => (this.product = data));
      }
    }
  }
}
