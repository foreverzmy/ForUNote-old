import { TestBed, inject } from '@angular/core/testing';

import { CodeMirrorService } from './code-mirror.service';

describe('CodeMirrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeMirrorService]
    });
  });

  it('should be created', inject([CodeMirrorService], (service: CodeMirrorService) => {
    expect(service).toBeTruthy();
  }));
});
