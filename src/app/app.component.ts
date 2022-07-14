import { Component } from '@angular/core';
import { CreateUserModalService } from './shared/services/create-user-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public createUserModalService: CreateUserModalService) {}
}
