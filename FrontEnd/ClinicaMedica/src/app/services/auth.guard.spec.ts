import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let servicio: UsuarioService;
  let route:Router

  beforeEach(() => {
    guard = new AuthGuard(servicio,route);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });


});
