import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFeedbackComponent } from './generic-feedback.component';

describe('GenericFeedbackComponent', () => {
  let component: GenericFeedbackComponent;
  let fixture: ComponentFixture<GenericFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
