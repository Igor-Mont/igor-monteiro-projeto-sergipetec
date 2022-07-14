import { TestBed } from '@angular/core/testing';

import { CreateUserModalService } from './create-user-modal.service';

describe('CreateUserModalService', () => {
  let service: CreateUserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service.changeVisibility should toggle the show value', () => {
    const show = service.show
    service.changeVisibility()
    expect(service.show).toBe(!show);
  });
});
