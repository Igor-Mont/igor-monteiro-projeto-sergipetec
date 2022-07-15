import { Component } from '@angular/core';
import { InfoUserModalService } from './shared/services/info-user-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public infoUserModalService: InfoUserModalService) { }
}
