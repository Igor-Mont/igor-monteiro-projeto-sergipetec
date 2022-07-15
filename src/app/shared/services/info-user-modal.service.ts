import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUserModalService {
  show: boolean = false
  constructor() { }

  changeVisibility(): void {
    this.show = !this.show
  }
}
