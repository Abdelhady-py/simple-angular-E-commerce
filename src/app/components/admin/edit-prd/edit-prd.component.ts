import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from 'src/app/model/Iproduct';
import { Iuser } from 'src/app/model/iuser';
import { AdminservService } from 'src/app/services/admin.service';
import { PrdapiService } from 'src/app/services/prdapi.service';

@Component({
  selector: 'app-edit-prd',
  templateUrl: './edit-prd.component.html',
  styleUrls: ['./edit-prd.component.scss'],
})
export class EditPrdComponent {
  paramId: string = '';
  query: string = '';

  product: IProduct = {} as IProduct;
  constructor(
    private adminserv: AdminservService,
    private route: Router,
    private router: ActivatedRoute,
    private prdapi: PrdapiService
  ) {}

  ngOnInit(): void {
    const paramId = this.router.snapshot.paramMap.get('prodId');
    if (paramId) {
      this.paramId = paramId;
      this.prdapi.getPrdById(+paramId).subscribe((data) => {
        this.product = data;
      });
    }
  }

  updateProduct() {
    if (this.paramId) {
      console.log('edit prd');

      this.prdapi.updateProduct(this.product).subscribe((data) => {
        this.prdapi.editProdut.emit(data);
      });
    }
  }
}
