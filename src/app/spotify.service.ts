import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService{
    constructor(private _http : Http) {
    }

    getPost(searchText : string){
        var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchText + '*';
        return this._http.get(url)
            .map(res=>res.json());
    }
}