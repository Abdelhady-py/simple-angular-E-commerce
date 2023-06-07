import { Injectable } from '@angular/core';
import { IProduct } from '../model/Iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServService {


  products:IProduct[]=[]
  constructor() {

  //   this.products=[

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

  }

  // getAllProducts():IProduct[]{
  //   return this.products
  // }








  // getProductById(id:number): IProduct |undefined{
  //   return this.products.find(prd=>prd.id=id)
  // }




}



