import { TestBed, inject } from '@angular/core/testing';

import { MarkedService } from './marked.service';

describe('CodeMirrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkedService]
    });
  });

  it('should be created', inject([MarkedService], (service: MarkedService) => {
    expect(service).toBeTruthy();
  }));
});
