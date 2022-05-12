import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Product } from "../Models/product"
import { CartServiceService } from '../Services/cart-service.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mySlides: any [] = [];
  myProducts: Product[] = [];
  constructor(private cartService : CartServiceService) {
    this.mySlides.push("../../assets/images/slide1.jpg")
    this.mySlides.push("../../assets/images/slide2.jpg")
    this.mySlides.push("../../assets/images/slide3.jpg")

    this.myProducts = cartService.getProducts()
  }

  addToCart(id: number) {
    this.cartService.addToCart(id)
  }
}
