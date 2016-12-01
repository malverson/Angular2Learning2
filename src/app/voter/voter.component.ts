import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'voter',
    templateUrl: './voter.component.html',
    styleUrls: ['./voter.component.scss']
})
export class VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();
    onUpClick(){
        if (this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({myVote: this.myVote });
    }
    onDownClick(){
        if (this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({myVote: this.myVote });
    }
}
