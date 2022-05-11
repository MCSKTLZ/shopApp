import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Product } from "../Models/product"

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mySlides: any [] = [];
  myProducts: Product[] = [];
  constructor() {
    this.mySlides.push("../../assets/images/slide1.jpg")
    this.mySlides.push("../../assets/images/slide2.jpg")
    this.mySlides.push("../../assets/images/slide3.jpg")

    this.myProducts.push( {title: "Robe", category:"Summer", price: 45, currency:"€", picture:"../../assets/images/slide1.jpg"})

    this.myProducts.push( {title: "Pantalon", category:"Summer", price: 75, currency:"€", picture:"../../assets/images/slide2.jpg"})

    this.myProducts.push( {title: "Gant", category:"Winter", price: 25, currency:"€", picture:"../../assets/images/slide3.jpg"})

    this.myProducts.push( {title: "Polo", category:"Summer", price: 80, currency:"€", picture:"../../assets/images/slide1.jpg"})

  }

}
