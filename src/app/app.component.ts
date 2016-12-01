import { Component } from '@angular/core';
import { ImageService } from './gallery/image/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageService]
})
export class AppComponent {
  title: string = 'Learning Project';
  images: any[];
  tweet = {
    totalLikes: 10,
    iLike: false
  }
  constructor(imageService: ImageService){
    this.images = imageService.getImages();
  }
}
