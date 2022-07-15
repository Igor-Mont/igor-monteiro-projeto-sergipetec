import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateUserModalComponent } from './create-user-modal.component';

describe('CreateUserModalComponent', () => {
  let component: CreateUserModalComponent;
  let fixture: ComponentFixture<CreateUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserModalComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component.addNewInputAddress should add one value in component.number_addresses', () => {
    component.addNewInputAddress()
    expect(component.number_addresses.length).toBe(1);
  });

  it('component.addNewInputAddress should add an new container of inputs', () => {
    const button = fixture.nativeElement.querySelector('#btn')
    button.click()
    fixture.autoDetectChanges()
    const newField = fixture.nativeElement.querySelector('#new_container_addresses')
    expect(newField).toBeTruthy();
  });

  it('component.getNewAddresses should returns an list of new addresses', () => {
    const new_addresses = component.getNewAddresses()
    expect(new_addresses).toBeTruthy();
  });
});
