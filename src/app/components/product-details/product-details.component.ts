import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from 'src/app/model/Iproduct';
import { ProductServService } from 'src/app/services/product-serv.service';
import { Location } from '@angular/common';
import { PrdapiService } from 'src/app/services/prdapi.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prdId: number = 0;

  product: IProduct | undefined = undefined;
  constructor(
    private prdapi: PrdapiService,
    private prdsrv: ProductServService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.prdId = this.activateRouter.snapshot.paramMap.get('prodId')
      ? Number(this.activateRouter.snapshot.paramMap.get('prodId'))
      : 0;

    this.prdapi.getPrdById(this.prdId).subscribe((data) => {
      console.log('prd from det');
      console.log(data);

      this.product = data;
    });
  }

  backHome() {
    this.location.back();
  }
  nextPrd() {
    const newId = this.activateRouter.snapshot.paramMap.get('prodId')
      ? Number(this.activateRouter.snapshot.paramMap.get('prodId'))
      : 0;
    this.prdId = newId + 1;

    this.prdapi.getPrdById(this.prdId).subscribe((data) => {
      this.product = data;
      this.router.navigate([`/productDetails/${this.prdId}`]);
    });
  }
  prevPrd() {
    const newId = this.activateRouter.snapshot.paramMap.get('prodId')
      ? Number(this.activateRouter.snapshot.paramMap.get('prodId'))
      : 0;
    this.prdId = newId - 1;

    this.prdapi.getPrdById(this.prdId).subscribe((data) => {
      this.product = data;
    });
    this.router.navigate([`/productDetails/${this.prdId}`]);
  }
}
