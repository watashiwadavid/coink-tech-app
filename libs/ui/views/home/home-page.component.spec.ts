import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register method when register button is clicked', () => {
    const registerSpy = jest.spyOn(component, 'register');
    const button =
      fixture.debugElement.nativeElement.querySelector('button.btn-primary');
    button.click();
    expect(registerSpy).toHaveBeenCalled();
  });

  it('should display logo', () => {
    const img = fixture.debugElement.nativeElement.querySelector('img');
    expect(img.src).toContain('logo.svg');
  });

  it('should display title in uppercase', () => {
    const titleElement = fixture.debugElement.nativeElement.querySelector(
      '.font-bold.text-primary'
    );
    expect(titleElement.textContent.trim()).toBe(
      'LA ALCANCÍA QUE SIEMPRE TE ACOMPAÑA'.toUpperCase()
    );
  });

  it('should display register button', () => {
    const button =
      fixture.debugElement.nativeElement.querySelector('button.btn-primary');
    expect(button.textContent.trim()).toBe('REGÍSTRATE');
  });

  it('should display login button', () => {
    const button = fixture.debugElement.nativeElement.querySelector(
      'button.btn-secondary'
    );
    expect(button.textContent.trim()).toBe('INGRESA');
  });
});
