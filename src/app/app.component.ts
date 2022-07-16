import { Component } from '@angular/core';
import { CreateUserModalService } from './shared/services/create-user-modal.service';
import { InfoUserModalService } from './shared/services/info-user-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  actualizations: number = 0
  constructor(
    public infoUserModalService: InfoUserModalService, 
    public createUserModalService: CreateUserModalService
  ) {}

  handleCLick(): void {
    this.actualizations += this.actualizations + 1
  }

}
