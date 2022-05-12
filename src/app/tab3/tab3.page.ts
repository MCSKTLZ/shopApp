import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { PhotosService } from '../Services/photos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService : PhotosService) {}

  addPhotoToGallery() {
    this.photoService.addProductPhoto();
  }

}
