import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergemap';
import { SpotifyService } from '../spotify.service';

@Component({
    selector: 'artist-search',
    templateUrl: 'artist-search.component.html',
    styleUrls: ['./artist-search.component.scss'],
    providers: [SpotifyService]
})
export class ArtistSearchComponent implements OnInit {
    form: FormGroup;
    artists: any[];
    constructor(fb:	FormBuilder, private _spotifyService: SpotifyService) {		
        this.form = fb.group({
            search:	[]
        });
    };

    ngOnInit(){   
        var search = this.form.controls['search'];
        search
            .valueChanges
            .filter(text => text.length >=3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                return this._spotifyService.getPost(searchTerm);
            })
            .subscribe(data => this.artists = data.artists.items);    
    };
}
