import { Component, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/model/Iproduct';
import { VisaPipe } from 'src/app/pipes/visa.pipe';
@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss'],
})
export class ProductParentComponent {
  filteredItemsByName: string = '';
  filteredItemsByPrice: string = '';
  filteredItemsByCat: string = '';
  creditCardNumber: string = '';

  cartItems: IProduct[] = [];
  addToCart(product: IProduct) {
    const existingProduct = this.cartItems.find(
      (item) => item.title === product.title
    );
    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity
        ? existingProduct.quantity + 1
        : 1;
    } else {
      const newProduct: IProduct = {
        ...product,
        quantity: 1,
        purchaseDate: new Date(),
      };
      this.cartItems.push(newProduct);
    }
  }

  // calculateTotalPrice(): number {
  //   let totalPrice = 0;
  //   for (const item of this.cartItems) {
  //     totalPrice += item.price * (item.quantity ?? 0);
  //   }
  //   return totalPrice;
  // }

  formattedCreditCardNumber: string = '';
  formatCreditCardNumber() {
    if (this.creditCardNumber) {
      const formattedValue = this.creditCardNumber.slice(0, 16);

      const formattedWithHyphens = formattedValue.replace(/(.{4})/g, '$1-');
      this.formattedCreditCardNumber = formattedWithHyphens.replace(/-$/, '');
    } else {
      this.formattedCreditCardNumber = '';
    }
  }

  prds: IProduct[] = [];
  sortProducts(allSorted: any) {
    // console.log("From parent"+allSorted);
    this.prds.push(allSorted);
  }
}
