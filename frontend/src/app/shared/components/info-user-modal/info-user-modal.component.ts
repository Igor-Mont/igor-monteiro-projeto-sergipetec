import { Component, OnInit } from '@angular/core';
import { InfoUserModalService } from '../../services/info-user-modal.service';

@Component({
  selector: 'app-info-user-modal',
  templateUrl: './info-user-modal.component.html',
  styleUrls: ['./info-user-modal.component.scss']
})
export class InfoUserModalComponent implements OnInit {
  constructor(public infoUserModalService: InfoUserModalService) { }

  ngOnInit(): void {}

}
