import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor() {
        console.log("i m in auth guard-===================");
    }
}