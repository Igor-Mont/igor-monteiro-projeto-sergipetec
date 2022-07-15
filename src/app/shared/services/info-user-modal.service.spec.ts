import { TestBed } from '@angular/core/testing';

import { InfoUserModalService } from './info-user-modal.service';

describe('InfoUserModalService', () => {
  let service: InfoUserModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoUserModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
