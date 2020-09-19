import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClient, } from '@angular/common/http';

describe('UsuarioService', () => {
  let http: HttpClient;
  let service: UsuarioService;
  


  beforeEach(() => {
    service =  new UsuarioService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
