import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreatePatientComponent } from './create-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from '../../services/usuario.service';

describe('CreatePatientComponent', () => {
  let component: CreatePatientComponent;
  let fixture: ComponentFixture<CreatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePatientComponent],
      imports: [FormsModule,ReactiveFormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[UsuarioService]

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

  xit('Crear paciente',()=>{
    
    let forma ={
      value:{
        'description': "y",
        'dpi': '3',
        'genre': "Hombre",
        'lastName': "y",
        'name': "y"
      }
      }

    let resp =  component.registrarPaciente(forma);
    console.log(resp);
 
    expect(resp).toBeUndefined;
  });

});
