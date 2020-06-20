import { TestBed, async } from '@angular/core/testing';
import { PublicContainer } from './public.container';

describe('PublicContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PublicContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-bootstrap'`, () => {
    const fixture = TestBed.createComponent(PublicContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-bootstrap');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PublicContainer);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-bootstrap app is running!');
  });
});
