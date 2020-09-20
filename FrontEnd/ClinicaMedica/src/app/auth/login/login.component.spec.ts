import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { EMPTY, observable, Observable } from 'rxjs';
import { from } from 'rxjs';

import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';






describe('LoginComponent', () => {
  

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let servicio: UsuarioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ LoginComponent ],
      providers:[UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear el formulario login con 2 registro, userName y password',()=>{
    expect(component.forma.contains('userName')).toBeTruthy();
    expect(component.forma.contains('password')).toBeTruthy();
  });

    it('El usuario debe ser obligatorio', ()=>{

    const UserName =  component.forma.get('userName');
    UserName.setValue('user1');
    expect(UserName.status).toBe('VALID');
  
  });

  it('El password debe ser obligatorio', ()=>{
    const Password = component.forma.get('password');
    Password.setValue('1234');
    expect(Password.status).toBe('VALID');
  })


  it('Debe de retornar un formulario invalido',()=>{
    const userName = component.forma.get('userName');
    userName.setValue('');
    const password = component.forma.get('password');
    password.setValue('123');
    const resp = component.ingresar();
    expect(resp).toBe(false);
  });


  xit('login correcto',()=>{
    const userName = component.forma.get('userName');
    userName.setValue('user1');
    const password = component.forma.get('password');
    password.setValue('123');
    console.log(component.forma.value.userName);
    console.log(component.forma.value.password);
    const resp = component.ingresar();
    expect(resp).toBeTrue;
  });





});

