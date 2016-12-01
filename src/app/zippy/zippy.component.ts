import { Component, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl: 'zippy.component.html',
    styleUrls: ['zippy.component.scss']
})
export class ZippyComponent {
    isExpanded = false;
    @Input() title: string;
        
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}
