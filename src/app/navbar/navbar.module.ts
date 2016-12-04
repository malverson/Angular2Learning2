// Angular Imports
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// This Module's Components
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule {

}
