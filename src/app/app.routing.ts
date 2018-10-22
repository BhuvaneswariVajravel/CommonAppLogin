import { Routes, RouterModule } from "@angular/router";
import { LoginComponent} from './components/login/login.component';
const appRoutes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path:"login", component:LoginComponent}
];

export const appRouting = RouterModule.forRoot(appRoutes)