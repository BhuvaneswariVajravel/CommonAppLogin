import { Component } from "@angular/core";
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: "login.component.html"
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted = false;
    constructor(private fb: FormBuilder, private rs: Router) {
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['admin2@f.com', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")]],
            password:['1123',[Validators.required]]
        });
    }

    login(form){
        this.submitted = true;
        console.log("formsubmitted=========");
        this.rs.navigate(['/home']);

    }
}