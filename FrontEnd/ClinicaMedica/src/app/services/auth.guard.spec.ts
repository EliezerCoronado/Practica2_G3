import { TestBed, async } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ AuthGuard ],
      providers:[UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  xit('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
