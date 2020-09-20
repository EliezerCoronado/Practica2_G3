import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockRegister{
  
  forma:FormGroup;
  constructor(){
    this.forma = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null,Validators.required),
      userName: new FormControl(null, Validators.required),
      dpi: new FormControl(null,Validators.required),
      colegiado: new FormControl(null, Validators.required),
      genero: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required)
    });
  }

  registrarMedico(forma){
    if(forma.valid){
      return true
    }else{
      return false
    }
  }


}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let servicio: UsuarioService;
  let mockRegistro: MockRegister;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ RegisterComponent ],
      providers:[UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockRegistro = new MockRegister;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Debe crear el formulario Register con 8 campos',()=>{
    expect(component.forma.contains('firstName')).toBeTruthy();
    expect(component.forma.contains('lastName')).toBeTruthy();
    expect(component.forma.contains('userName')).toBeTruthy();
    expect(component.forma.contains('dpi')).toBeTruthy();
    expect(component.forma.contains('colegiado')).toBeTruthy();
    expect(component.forma.contains('genero')).toBeTruthy();
    expect(component.forma.contains('password')).toBeTruthy();
    expect(component.forma.contains('password2')).toBeTruthy();
    
  });

  it('Los campos deben ser obligatorios', ()=>{

    const FirstName =  component.forma.get('firstName');
    FirstName.setValue('Eliezer');
    const LastName =  component.forma.get('lastName');
    LastName.setValue('Coronado');
    const UserName =  component.forma.get('userName');
    UserName.setValue('user1');
    const dpi =  component.forma.get('dpi');
    dpi.setValue('123');
    const Colegiado =  component.forma.get('colegiado');
    Colegiado.setValue('123');
    const Genero =  component.forma.get('genero');
    Genero.setValue('Masculino');
    const Password1 =  component.forma.get('password');
    Password1.setValue('123');
    const Password2 =  component.forma.get('password2');
    Password2.setValue('123');

    expect(UserName.status.length).toBe(5);
    expect(FirstName.status).toBe('VALID');
    expect(LastName.status.length).toBeLessThan(6);
    expect(dpi.status.length).toBeGreaterThan(4);
    expect(Colegiado.status.length).toBeGreaterThanOrEqual(5);
    expect(Genero.status.length).toBeLessThanOrEqual(5);
    expect(Password1.status).toBe('VALID');
    expect(Password2.status).toBe('VALID');
  });

  it('registrar medico, formulario invalido',()=>{
   const resp = component.registrarMedico();
   console.log(resp);
   expect(resp).toBe(false);
  });

  it('Debe crear un medico',()=>{
    const FirstName =  component.forma.get('firstName');
    FirstName.setValue('Eliezer');
    const LastName =  component.forma.get('lastName');
    LastName.setValue('Coronado');
    const UserName =  component.forma.get('userName');
    UserName.setValue('user10');
    const dpi =  component.forma.get('dpi');
    dpi.setValue('5123');
    const Colegiado =  component.forma.get('colegiado');
    Colegiado.setValue('5123');
    const Genero =  component.forma.get('genero');
    Genero.setValue('Masculino');
    const Password1 =  component.forma.get('password');
    Password1.setValue('123');
    const Password2 =  component.forma.get('password2');
    Password2.setValue('123');
    const resp = component.registrarMedico();
    expect(resp).toBeTrue;

  })
  
  it('Debe crear un medico, mock',()=>{
      let forma = new FormGroup({
      firstName: new FormControl('Eliezer', Validators.required),
      lastName: new FormControl('COronado',Validators.required),
      userName: new FormControl('user1', Validators.required),
      dpi: new FormControl('123456',Validators.required),
      colegiado: new FormControl('123456', Validators.required),
      genero: new FormControl('Masculino', Validators.required),
      password: new FormControl('123', Validators.required),
      password2: new FormControl('123', Validators.required)
    });
    const resp = mockRegistro.registrarMedico(forma);
    expect(resp).toBeTruthy;
  })

  





});
