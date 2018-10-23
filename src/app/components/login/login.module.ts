import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { SharedModule } from '../../shared/shared.module';
import { LoginService } from './login.service';
@NgModule({
  imports: [
  SharedModule,
  loginRouting
  ],
  declarations: [LoginComponent],
  providers:[LoginService]
})
export class LoginModule {
  constructor(){
    console.log("i n in login module==========")
  }
 }