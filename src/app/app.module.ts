import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateUserModalComponent } from './shared/components/create-user-modal/create-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
