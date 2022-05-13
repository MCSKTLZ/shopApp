import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  async productAddedToast() {
    await Toast.show({
      text : "Product added to the cart",
      position : "top"
    })
  }
  async productRemovedToast() {
    await Toast.show({
      text : "Product removed from the cart",
      position : "top"
    })
  }
}
