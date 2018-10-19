import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
    selector:'app-login',
    templateUrl: "login.component.html"
})
export class LoginComponent{
    constructor(){
        console.log("i m in login=============")
    }
}