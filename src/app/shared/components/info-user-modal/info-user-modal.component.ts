import { Component, OnInit } from '@angular/core';
import { InfoUserModalService } from '../../services/info-user-modal.service';

@Component({
  selector: 'app-info-user-modal',
  templateUrl: './info-user-modal.component.html',
  styleUrls: ['./info-user-modal.component.scss']
})
export class InfoUserModalComponent implements OnInit {
  user = {
    addressees: [
      {
        rua: 'Pablo Picasso',
        numero: '43',
        bairro: 'Suiça',
        cidade: 'Aracaju',
        cep: '49000000',
        estado: 'Sergipe',
        pais: 'Brasil'
      },
      {
        rua: 'João Ribeiro',
        numero: 1003,
        bairro: 'Cardoso',
        cidade: 'Joinville',
        cep: '09530210',
        estado: 'Santa Catarina',
        pais: 'Brasil'
      }
    ]
  }

  constructor(public infoUserModalService: InfoUserModalService) { }


  ngOnInit(): void {}

}
