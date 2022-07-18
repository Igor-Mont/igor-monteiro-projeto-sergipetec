import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/User';
import { CreateUserModalService } from '../../services/create-user-modal.service';
import { InfoUserModalService } from '../../services/info-user-modal.service';
import { UpdateUserModalService } from '../../services/update-user-modal.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  @Input() actualizations = 0
  users: User[] = []
  constructor(
    public infoUserModalService: InfoUserModalService,
    public createUserModalService: CreateUserModalService,
    public updateUserModalService: UpdateUserModalService,
    private userService: UserService
  ) {
    this.getUsers()
  }

  ngOnInit(): void {}

  ngOnChanges({ actualizations }: SimpleChanges): void {
    if (actualizations.isFirstChange()) return
    if (actualizations.previousValue !== actualizations.currentValue) {
      this.getUsers()
    }
  }

  getUsers(): void {
    this.userService.getAll().subscribe(users => (this.users = users))
  }

  maskCPF(value: string, mask = '###.###.###-##') {
    let i = 0
    const v = value.toString()

    return mask.replace(/#/g, () => v[i++] || '')
  }

  handleOpenInfoModal(user: any): void {
    this.infoUserModalService.setUser(user)
    this.infoUserModalService.changeVisibility()
  }

  handleOpenUpdateModal(user: any): void {
    this.updateUserModalService.setUser(user)
    this.updateUserModalService.changeVisibility()
  }

  deleteUser(id: number | undefined): void {
    this.users = this.users.filter(user => user.id !== id )
    this.userService.delete(id!).subscribe()
  }

}
