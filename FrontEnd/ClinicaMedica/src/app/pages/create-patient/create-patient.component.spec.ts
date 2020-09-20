import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreatePatientComponent } from './create-patient.component';

describe('CreatePatientComponent', () => {
  let component: CreatePatientComponent;
  let fixture: ComponentFixture<CreatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePatientComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validacion de formulario', () => {
    let form = component.createForm();
    form.controls.name.setValue('aldo');
    form.controls.lastName.setValue('perez');
    form.controls.description.setValue('hola mundo');
    form.controls.genre.setValue('Macho');
    form.controls.dpi.setValue(1234);
    expect(form.valid).toBeTruthy();
  });
});
