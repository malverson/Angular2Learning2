import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';
import { LikeHeartComponent } from './gallery/like-heart/like-heart.component';
import { VoterComponent } from './voter/voter.component';
import { ImagesComponent } from './gallery/images/images.component';
import { ImageComponent } from './gallery/image/image.component';
import { ZippyComponent } from './zippy/zippy.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { NavbarComponent } from './navbar/navbar.component';

import { routing } from './app.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistRatingComponent } from './artist-rating/artist-rating.component';
import { NavBarDropdownComponent } from './nav-bar-dropdown/nav-bar-dropdown.component';
import { AboutComponent } from './about/about.component';

@NgModule({ 
  declarations: [
    AppComponent, GalleryComponent, LikeHeartComponent, VoterComponent, ImagesComponent, 
    ImageComponent, ZippyComponent, SignupFormComponent, ArtistSearchComponent, NavbarComponent, SidebarComponent, BreadcrumbsComponent, FooterComponent, ArtistRatingComponent, NavBarDropdownComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
