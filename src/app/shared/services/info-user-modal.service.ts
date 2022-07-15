import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUserModalService {
  show: boolean = false
  user: any
  constructor() { }


  changeVisibility(): void {
    this.show = !this.show
  }

  setUser(user: any): void {
    this.user = user
  } 
}
