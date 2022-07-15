import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoUserModalComponent } from './shared/components/info-user-modal/info-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoUserModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
