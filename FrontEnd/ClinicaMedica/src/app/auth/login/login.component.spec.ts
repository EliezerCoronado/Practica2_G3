import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { FormBuilder } from '@angular/forms';






describe('LoginComponent', () => {
  

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let servicio: UsuarioService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule.withRoutes([])],
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
    const UserName = component.forma.get('userName');
    UserName.setValue('user1');
    expect(UserName).toBeTruthy;
  });

  it('El usuario no puede ser null', ()=>{
    const UserName = component.forma.get('userName');
    UserName.setValue(null);
    expect(UserName).toBeFalsy;
  });


  it('El password debe ser obligatorio', ()=>{
    const Password = component.forma.get('password');
    Password.setValue('1234');
    expect(Password).toBeTruthy;
  })
  

  it('Debe de retornar un formulario invalido',()=>{
    const userName = component.forma.get('userName');
    userName.setValue(null);
    const password = component.forma.get('password');
    password.setValue('null');
    const resp = component.ingresar();
    expect(resp).toBe(false);
  });

  it('login correcto',(done)=>{
    let respuesta=component.service.login('user1','123').subscribe((data:boolean)=>{
      if (data === true){
        done();
        return true;
        
      }else{
        done();
        return false;
      }
    });
    expect(respuesta).toBeTrue;
  });
  

  it('Debe de llamar al srevidor para hacer login',()=>{
      
    const espia = spyOn(servicio,'login').and.callFake(medico=>{
      return EMPTY;
    });
    component.ingresar();
    
    expect(espia).toHaveBeenCalled();
  });/*
*/
});