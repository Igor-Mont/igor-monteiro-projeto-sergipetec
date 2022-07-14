import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserModalService {
  show: boolean = false
  constructor() {}

  changeVisibility(): void {
    this.show = !this.show
  }
}
