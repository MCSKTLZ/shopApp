import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';


export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  public photos: UserPhoto[] = [];

  constructor() { }

  async addProductPhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType : CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100
    })

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });

  } 
}
