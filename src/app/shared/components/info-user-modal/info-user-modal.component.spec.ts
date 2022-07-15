import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserModalComponent } from './info-user-modal.component';

describe('InfoUserModalComponent', () => {
  let component: InfoUserModalComponent;
  let fixture: ComponentFixture<InfoUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
