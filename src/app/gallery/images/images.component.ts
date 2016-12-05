import { Component } from '@angular/core';
import { ImageService } from '../image/image.service';
import { ImageComponent } from '../image/image.component';

@Component({
    selector: 'images',
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-3" *ngFor="let image of images">
                <image [data]="image"></image>
            </div>
        </div>`,
    providers: [ImageService]
})
export class ImagesComponent {
    images: any[];

    constructor(imageService: ImageService) {
        this.images = imageService.getImages();
    }
}
