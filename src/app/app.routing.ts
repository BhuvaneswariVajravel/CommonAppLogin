import { Routes, RouterModule } from "@angular/router";
const appRoutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path:"login", loadChildren:"./components/login/login.module#LoginModule"},
    { path:"home",loadChildren:"./components/home/home.module#HomeModule"}
];

export const appRouting = RouterModule.forRoot(appRoutes)