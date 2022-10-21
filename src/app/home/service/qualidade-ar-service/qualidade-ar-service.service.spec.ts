import { TestBed } from '@angular/core/testing';

import { QualidadeArServiceService } from './qualidade-ar-service.service';

describe('QualidadeArServiceService', () => {
  let service: QualidadeArServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualidadeArServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
