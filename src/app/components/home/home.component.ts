import { Component } from "@angular/core";
import { AuthGuard} from '../../shared/auth-guard';

@Component({
    selector: 'app-home',
    template: `<div></div>`
})
export class HomeComponent {
    constructor(private rs: AuthGuard){
        console.log("in home==========");
    }
}