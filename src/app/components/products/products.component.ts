import { IProduct } from 'src/app/model/Iproduct';
import {
  Component,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductServService } from 'src/app/services/product-serv.service';
import { PrdapiService } from 'src/app/services/prdapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  // products: IProduct[];

  clientName: string = 'Abdelhady';
  logo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGoW0L3j_s4aWdT2gOtAhS0LcKqqNMbAK7_4C5W0RHMLcFhDaOvnemS7u04mIfxNUQb4&usqp=CAU';

  isPurchased: boolean = false;

  cartItems: IProduct[] = [];

  @Output() buyProductEvent = new EventEmitter<IProduct>();
  // ...

  addToCart(product: IProduct) {
    this.buyProductEvent.emit(product);
  }

  // sortPrds() {
  //   let sortedProducts = this.prdsrv.products.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   this.SortedPrdsEvent.emit(sortedProducts);
  // }

  buy(): void {
    this.isPurchased = true;
  }
  buyProduct(product: IProduct): void {
    if (product.quantity !== undefined && product.quantity > 0) {
      product.quantity -= 1;
    }
  }
  // @Output() addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  // addProductTocart(product: IProduct) {
  //   this.addToCart.emit(product);

  // }
  @Output() SortedPrdsEvent: EventEmitter<IProduct[]> = new EventEmitter<
    IProduct[]
  >();

  @Input() filteredProductsByName!: string;

  @Input() filteredProductsByPrice!: string;

  @Input() filteredProductsByCat!: string;

  filteredProduct: IProduct[] = [];

  products: IProduct[] = [];

  constructor(
    private prdsrv: ProductServService,
    private router: Router,
    private prdapi: PrdapiService
  ) {
    //     {
    //       id: 1,
    //       name: 'Blue T-shirt',
    //       quantity: 5,
    //       price: 19,
    //       img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //       categoryId: 5,
    //     },
    //     {
    //       id: 2,
    //       name: 'Black Jeans',
    //       quantity: 7,
    //       price: 49,
    //       img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //       categoryId: 3,
    //     },
    //     {
    //       id: 3,
    //       name: 'Red Sneakers',
    //       quantity: 7,
    //       price: 39,
    //       img:'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //       categoryId: 2,
    //     },
    //     {
    //   id: 4,
    //   name: 'White Dress',
    //   quantity: 1,
    //   price: 79,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 1,
    // },
    // {
    //   id: 5,
    //   name: 'Green Hat',
    //   quantity: 0,
    //   price: 14,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 4,
    // },
    // {
    //   id: 6,
    //   name: 'Brown Leather Belt',
    //   quantity: 2,
    //   price: 29,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 1,
    // },
    // {
    //   id: 7,
    //   name: 'Pink Backpack',
    //   quantity: 6,
    //   price: 59,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 2,
    // },
    // {
    //   id: 8,
    //   name: 'Yellow Sunglasses',
    //   quantity: 10,
    //   price: 9,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 2,
    // },
    // {
    //   id: 9,
    //   name: 'Purple Scarf',
    //   quantity: 4,
    //   price: 19,
    //   img:'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 4,
    // },
    // {
    //   id: 10,
    //   name: 'Gray Sweatshirt',
    //   quantity: 7,
    //   price: 34,
    //   img: 'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   categoryId: 5,
    // }
    //   ];
    // this.prdsrv.products.forEach((product) => {
    //   product.categoryName = this.categoryNames[product.categoryId - 1];
    // });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredProductsByName']) {
      console.log(changes);

      this.prdapi.getAllProducts().subscribe((data) => {
        this.filteredProduct = data.filter((prd) =>
          prd.title
            .toLowerCase()
            .includes(changes['filteredProductsByName'].currentValue)
        );
      });
    } else if (changes['filteredProductsByPrice']) {
      console.log(changes);
      this.prdapi.getAllProducts().subscribe((data) => {
        this.filteredProduct = data.filter((prd) => {
          return prd.price > changes['filteredProductsByPrice'].currentValue;
        });
      });
    } else if (changes['filteredProductsByCat']) {
      this.prdapi
        .getproductByCategory(changes['filteredProductsByCat'].currentValue)
        .subscribe({
          next: (data) => {
            this.filteredProduct = data.filter((prd) => {
              return (
                prd.categoryId == changes['filteredProductsByCat'].currentValue
              );
            });
          },

          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  ngOnInit(): void {
    this.prdapi.getAllProducts().subscribe({
      next: (data) => {
        console.log('from comp');

        console.log(data);

        this.filteredProduct = data;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnChange(): void {
    this.filteredProduct = this.filteredProduct;
  }

  getProdCat(num: number) {
    this.prdapi.getproductByCategory(num).subscribe({
      next: (data) => {
        this.filteredProduct = data;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  prdDetails(id: number) {
    this.router.navigate(['/productDetails', id]);
  }

  prdEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }
  deleteProduct(id: number) {
    this.prdapi.deleteProduct(id).subscribe((data) => {
      console.log(data);

      this.filteredProduct = this.filteredProduct.filter((el) => el.id !== id);
    });
  }
}
