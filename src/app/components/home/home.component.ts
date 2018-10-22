import { Component } from "@angular/core";


@Component({
    selector: 'app-home',
    template: `<shared></shared>`
})
export class HomeComponent {
    constructor(){
        console.log("in home==========");
    }
}