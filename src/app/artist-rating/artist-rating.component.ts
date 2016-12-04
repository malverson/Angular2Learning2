import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-rating',
  templateUrl: './artist-rating.component.html',
  styleUrls: ['./artist-rating.component.css']
})
export class ArtistRatingComponent {
  @Input() currentRate;
}
 