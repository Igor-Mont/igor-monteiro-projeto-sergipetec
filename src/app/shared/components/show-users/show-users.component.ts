import { Component, OnInit } from '@angular/core';
import { CreateUserModalService } from '../../services/create-user-modal.service';
import { InfoUserModalService } from '../../services/info-user-modal.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
    users = [
      {
        "id": 1,
        "nome": "MARIA CRISTINA PEREIRA",
        "email": "mcristina@gmail.com",
        "cpf": "93958790097",
        "telefone": "7932100044",
        "celular": "79994003345",
        "enderecos": [
          {
            "rua": "Pablo Picasso",
            "numero": "43",
            "bairro": "Suiça",
            "cidade": "Aracaju",
            "cep": "49000000",
            "estado": "Sergipe",
            "pais": "Brasil"
          },
          {
            "rua": "João Ribeiro",
            "numero": "1003",
            "bairro": "Cardoso",
            "cidade": "Joinville",
            "cep": "09530210",
            "estado": "Santa Catarina",
            "pais": "Brasil"
          }
        ]
      },
      {
        "id": 2,
        "nome": "JOÃO AUGUSTO DE SOUZA",
        "email": "jaugusto@gmail.com",
        "cpf": "17737300023",
        "telefone": "7932100055",
        "celular": "799940033466",
        "enderecos": [
          {
            "rua": "Romero Brito",
            "numero": "59",
            "bairro": "América",
            "cidade": "Campo Grande",
            "cep": "79002000",
            "estado": "Mato Grosso do Sul",
            "pais": "Brasil"
          }
        ]
      }
    ]
  constructor(
    public infoUserModalService: InfoUserModalService,
    public createUserModalService: CreateUserModalService
  ) {}

  ngOnInit(): void {}

  maskCPF(value: string, mask = '###.###.###-##') {
    let i = 0
    const v = value.toString()

    return mask.replace(/#/g, () => v[i++] || '')
  }

  handleClick(user: any): void {
    this.infoUserModalService.setUser(user)
    this.infoUserModalService.changeVisibility()
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id )
  }

}
