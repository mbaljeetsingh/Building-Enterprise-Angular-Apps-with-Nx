import { async, TestBed } from '@angular/core/testing';
import { ClientAuthModule } from './client-auth.module';

describe('ClientAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientAuthModule).toBeDefined();
  });
});
