import { async, TestBed } from '@angular/core/testing';
import { ClientHomeModule } from './client-home.module';

describe('ClientHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientHomeModule).toBeDefined();
  });
});
