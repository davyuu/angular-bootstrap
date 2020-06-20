import { TestBed, async } from '@angular/core/testing';
import { PrivateContainer } from './private.container';

describe('PrivateContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrivateContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PrivateContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
