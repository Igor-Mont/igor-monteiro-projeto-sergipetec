import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/Address';
import { CreateUserModalService } from '../../services/create-user-modal.service';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent implements OnInit {
  number_addresses: number[] = []
  
  userForm!: FormGroup
  
  constructor(public createUserModalService: CreateUserModalService) {}
  
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      smartphone: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      new_addresses: new FormControl('')
    })
  }

  get name() {
    return this.userForm.get('name')!
  }

  get email() {
    return this.userForm.get('email')!
  }

  get cpf() {
    return this.userForm.get('cpf')!
  }

  get phone() {
    return this.userForm.get('phone')!
  }

  get smartphone() {
    return this.userForm.get('smartphone')!
  }

  get number() {
    return this.userForm.get('number')!
  }
  
  get district() {
    return this.userForm.get('district')!
  }  

  get city() {
    return this.userForm.get('city')!
  }

  get street() {
    return this.userForm.get('street')!
  }

  get cep() {
    return this.userForm.get('cep')!
  }

  get country() {
    return this.userForm.get('country')!
  }

  get state() {
    return this.userForm.get('state')!
  }
  
  getNewAddresses(): Address[] {
    const new_addresses: Address[] = []
    let addresses: string[] = []
    
    const container = Array.from(document.forms[1].elements) as HTMLInputElement[]
    container.map((element) => {
      addresses.push(element.value)
    })

    let n = 2
    while (addresses.length >= 7) {
      const addressArray = addresses.slice(0, 7)
      const address: Address = {
        street: addressArray[0],
        number: addressArray[1],
        district: addressArray[2],
        cep: addressArray[3],
        city: addressArray[4],
        state: addressArray[5],
        country: addressArray[6],
      }
      new_addresses.push(address)
      addresses = addresses.slice(6, 7*n)
      n++
    }
    return new_addresses
  }

  addNewInputAddress(): void {
    this.number_addresses.push(1)
  }

  submit(): void {
    if(this.userForm.invalid) return

    const address: Address = {
      street: this.street.value,
      number: this.number.value,
      district: this.district.value,
      cep: this.cep.value,
      city: this.city.value,
      state: this.state.value,
      country: this.country.value,
    }

    const dataT = {
      name: this.name.value,
      email: this.email.value,
      cpf: this.cpf.value,
      phone: this.phone.value,
      smartphone: this.smartphone.value,
      addresses: [address ,...this.getNewAddresses()]
    }

    this.createUserModalService.changeVisibility()

    console.log(dataT)
  } 

}
