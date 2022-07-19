import { Injectable } from '@angular/core';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserModalService {
  show: boolean = false
  user!: User
  constructor() {}

  changeVisibility(): void {
    this.show = !this.show
  }

  setUser(user: any): void {
    this.user = user
  } 
}
