import { Component} from '@angular/core';

@Component({
    selector:'shared',
    template:`<div></div>`
})
export class SharedComponent{
    constructor(){console.log("in shared============");}
}