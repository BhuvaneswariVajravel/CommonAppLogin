import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {SharedComponent } from './shared.component';
@NgModule({
    imports:[CommonModule, ReactiveFormsModule],
    declarations:[SharedComponent],
    exports:[CommonModule, ReactiveFormsModule,SharedComponent]
})

export class SharedModule
{
  constructor(){console.log("in shared============");}
}