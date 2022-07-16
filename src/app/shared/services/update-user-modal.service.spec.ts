import { TestBed } from '@angular/core/testing';

import { UpdateUserModalService } from './update-user-modal.service';

describe('UpdateUserModalService', () => {
  let service: UpdateUserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateUserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
