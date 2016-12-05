import { Router, RouterModule} from '@angular/router';

import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

export const routing = RouterModule.forRoot([
    {path: '', component: ArtistSearchComponent},
    {path: 'artist', component: ArtistSearchComponent},
    {path: 'gallery', component: GalleryComponent },
    {path: 'about', component: AboutComponent },
    {path: '**', component: ArtistSearchComponent}
]);