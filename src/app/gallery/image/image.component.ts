import { Component, Input } from '@angular/core';

@Component({
    selector: 'image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent {
    constructor() {
        console.log(this.data);
    }
    @Input() data;
    post = {
        voteCount: 7,
        myVote: 0
    }
    onVote (){
        return;
    }
}
