import { Component, Input } from '@angular/core';

@Component({
    selector: 'like-heart',
    templateUrl: './like-heart.component.html',
    styleUrls: ['./like-heart.component.scss']
})
export class LikeHeartComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;

    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}
