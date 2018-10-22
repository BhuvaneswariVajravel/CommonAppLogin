import { Component } from "@angular/core";
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'app-login',
    templateUrl: "login.component.html"
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted = false;
    constructor(private fb: FormBuilder) {
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")]],
            password:['',[Validators.required]]
        });
    }

    login(form){
        this.submitted = true;
        console.log("formsubmitted=========");

    }
}