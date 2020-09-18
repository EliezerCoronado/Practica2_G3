import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { UsuarioService } from '../../services/usuario.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let servicio: UsuarioService;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    component = new RegisterComponent(servicio);
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
