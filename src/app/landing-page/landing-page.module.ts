import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { IonicModule } from '@ionic/angular';
import { LandingRoutingModule } from './landing-page.routing.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LandingRoutingModule,
        IonicModule,
    ],
    declarations:[
      LoginComponent,
      SignupComponent,

    ]
})
export class LandingPageModule {
}

