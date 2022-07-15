import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoUserModalComponent } from './shared/components/info-user-modal/info-user-modal.component';
import { ShowUsersComponent } from './shared/components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoUserModalComponent,
    ShowUsersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
