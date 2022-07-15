import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowUsersComponent } from './shared/components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
