import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import {UsernameValidators} from '../usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'signup-form.component.html',
    styleUrls: ['signup-form.component.scss']
})
export class SignupFormComponent {
    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });

    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['',Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ])],
            password: ['', Validators.required]
        })
    }

    signup(){
        //var result = authService.login(this.form.value);
        this.form.controls['username'].setErrors({
            invalidLogin: true
        })
        console.log(this.form.value);
    }
}
