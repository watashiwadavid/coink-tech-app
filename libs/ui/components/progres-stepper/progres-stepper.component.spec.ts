import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressStepperComponent } from './progres-stepper.component';

describe('StepperComponent', () => {
  let component: ProgressStepperComponent;
  let fixture: ComponentFixture<ProgressStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
