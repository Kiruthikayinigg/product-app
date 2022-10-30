import { ChangePasswordComponent } from './change-password/change-password.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GethelpComponent } from './gethelp/gethelp.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,GethelpComponent,PrivacyComponent, ChangePasswordComponent ]
})
export class HomePageModule {}
