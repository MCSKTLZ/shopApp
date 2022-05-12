import { Component } from '@angular/core';
import { Product } from '../Models/product';
import { BehaviorSubject } from 'rxjs';
import { CartServiceService } from '../Services/cart-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myBasket : Product[] = []
  totalBasket : BehaviorSubject<number>;
  cartItemCount : BehaviorSubject<number>;


  constructor(public cartService : CartServiceService) {
    this.myBasket = cartService.getCart()
    this.totalBasket = this.cartService.getTotal()
    this.cartItemCount = this.cartService.getCartItemCount()
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id)
  }

  addOneProduct(id: number ) {
    this.cartService.addOneProduct(id)
  }
  removeOneProduct(id : number) {
    this.cartService.removeOneProduct(id)
  }
}
