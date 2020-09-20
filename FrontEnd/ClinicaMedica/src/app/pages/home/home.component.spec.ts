import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Mensaje aleatorio", function () {
    spyOn(Math, 'random').and.returnValue(0.6);
    let text = component.getRandomText();
    expect(text).toEqual("Sale en vacaciones :)");
  });

  it('visualizacion de msj principal correcto', () => {
    expect(h1.textContent).toContain(component.principal);
  });

  it('deteccion de cambios de msj principal', () => {
    component.principal = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('Test Title');
  });
});
