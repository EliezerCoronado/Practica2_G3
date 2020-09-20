import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';

import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

class MockUsuarioService{
  authenticted = false  
  login(user:string,password:string){
      if(user ==='user1' && password ==='123'){
        return this.authenticted ===true;       
      }else{
        return this.authenticted === false;
      }
    
  }

}




describe('LoginComponent', () => {
  

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let servicio: UsuarioService;
  let mockAuth: MockUsuarioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ LoginComponent ],
      providers:[UsuarioService,MockUsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockAuth = new MockUsuarioService;

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


  it('login correcto, usando mocks',()=>{
    const userName = component.forma.get('userName');
    userName.setValue('user1');
    const password = component.forma.get('password');
    password.setValue('123');
    //console.log(component.forma.value.userName);
    //console.log(component.forma.value.password);
    let resp = mockAuth.login(userName.value,password.value);
    expect(resp).toBeTrue;
  });

  it('login incorrecto, usando mocks',()=>{
    const userName = component.forma.get('userName');
    userName.setValue('user10');
    const password = component.forma.get('password');
    password.setValue('123');
    //console.log(component.forma.value.userName);
    //console.log(component.forma.value.password);
    let resp = mockAuth.login(userName.value,password.value);
    expect(resp).toBeFalsy;
  });




});