import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateUserModalComponent } from './shared/components/create-user-modal/create-user-modal.component';
import { InfoUserModalComponent } from './shared/components/info-user-modal/info-user-modal.component';
import { ShowUsersComponent } from './shared/components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoUserModalComponent,
    ShowUsersComponent,
    CreateUserModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
