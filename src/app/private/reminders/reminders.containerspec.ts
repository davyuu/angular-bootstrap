import { TestBed, async } from '@angular/core/testing';
import { RemindersContainer } from './reminders.container';

describe('RemindersContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RemindersContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RemindersContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
