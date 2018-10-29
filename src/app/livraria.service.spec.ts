import { TestBed } from '@angular/core/testing';

import { LivrariaService } from './livraria.service';

describe('LivrariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivrariaService = TestBed.get(LivrariaService);
    expect(service).toBeTruthy();
  });
});
