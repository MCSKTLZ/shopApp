import { Injectable } from '@angular/core';
import { Product } from "../Models/product";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  products :  Product[] = [
    {id: 1, title: "Robe", category:"Summer", price: 45, currency:"€", picture:"../../assets/images/slide1.jpg", quantity: 0},
    {id : 45, title: "Pantalon", category:"Summer", price: 75, currency:"€", picture:"../../assets/images/slide2.jpg", quantity: 0},
    {id: 56, title: "Gant", category:"Winter", price: 25, currency:"€", picture:"../../assets/images/slide3.jpg", quantity: 0},
    {id: 3, title: "Polo", category:"Summer", price: 80, currency:"€", picture:"../../assets/images/slide1.jpg", quantity: 0}
  ]

  private cart = [];
  public total = new BehaviorSubject(0)
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(): Product[] {    
    return this.products;
  }

  getCart(): Product[] {
    console.log("this.cart: ", this.cart);
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }
  
  getTotal(): BehaviorSubject<number> {
    return this.total;
  }

  addToCart(id: number) {
    let product = this.products.find(x => x.id == id);
    this.total.next(this.total.value + product.price);
    this.cartItemCount.next(this.cartItemCount.value + 1)
    
    for(let i of this.cart) {
      if(i.id == product.id) {
        console.log("produit deja existant");
        product.quantity +=1;
        return
      }
    }
    product.quantity +=1;
    this.cart.push(product)
  }

  removeFromCart(id: number) {
    let product = this.cart.find(x => x.id == id)
    let productCartId = this.cart.indexOf(product)
    this.total.next(this.total.value - product.price*product.quantity);
    this.cartItemCount.next(this.cartItemCount.value - product.quantity)
    this.products.find(x => x.id == id).quantity = 0;

    this.cart.splice(productCartId, 1)
  }
  addOneProduct(id: number) {
    let product = this.products.find(x => x.id == id);
    this.total.next(this.total.value + product.price);
    this.cartItemCount.next(this.cartItemCount.value + 1)
    console.log(this.total);
    
    product.quantity +=1;
  }
  removeOneProduct(id: number) {
    let product = this.products.find(x => x.id == id);
    this.total.next(this.total.value - product.price);
    this.cartItemCount.next(this.cartItemCount.value - 1)
    product.quantity -=1;
    if(product.quantity == 0 ){
      this.removeFromCart(id)
    }
  }
}
