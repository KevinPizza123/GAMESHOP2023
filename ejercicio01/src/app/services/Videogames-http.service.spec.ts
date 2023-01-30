import { TestBed } from '@angular/core/testing';

import { VideogamesHttpService } from './Videogames-http.service';

describe('ProductHttpService', () => {
  let service: VideogamesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogamesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
