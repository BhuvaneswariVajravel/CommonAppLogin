import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        homeRouting
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { 
    constructor(){
        console.log("i n in home module==========")
      }
}