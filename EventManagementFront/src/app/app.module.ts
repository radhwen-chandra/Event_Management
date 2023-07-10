import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './security/JwtInterceptor';
import { AuthenticationService } from './security/authentication.service';
import { SignInComponent } from './user-components/sign-in/sign-in.component';
import { SignUpComponent } from './user-components/sign-up/sign-up.component';
import { UserService } from './user/user.service';





@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
