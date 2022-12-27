import { TestBed } from '@angular/core/testing';

import { NotauthorizedInterceptor } from './notauthorized.interceptor';

describe('NotauthorizedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotauthorizedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NotauthorizedInterceptor = TestBed.inject(NotauthorizedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
