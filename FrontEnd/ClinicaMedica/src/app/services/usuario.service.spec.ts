import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { URL_SERVICIOS } from '../config/config';

describe('UsuarioService', () => {
  let http: HttpClient;
  let mock: HttpTestingController;
  let service: UsuarioService;
  


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UsuarioService]
    });
    service = TestBed.get(UsuarioService);
    mock = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  
  it('Cargar Storage, debe de existir un token mayor', ()=>{
    localStorage.setItem('token','asdjfelkjdfenadfesskdfe5desfesdfe');
    service.cargarStorage(); 
    expect(service.token.length).toBeGreaterThan(10);
  });


  it('Cargar Storage, el token no tiene nada', ()=>{
    localStorage.setItem('token','');
    service.cargarStorage(); 
    expect(service.token.length).toBeLessThanOrEqual(0);
  });



  it('SaveStorage, debe crear token, username, apellido,dpi, colegiado, id en el storage', ()=>{
    const token='jajaja123456789pepe';
    const nombre='Jose David';
    const apellido='Axpuac Velasquez';
    const user='user4';
    const dpi='010101010';
    const colegiado='colegiado';
    const id = 'ajkbdlu8absdjabd5ajsadl3'
    service.saveStorage(user,token,nombre,apellido,dpi,colegiado,id) 
    expect(localStorage.getItem('username').length).toBeGreaterThan(0);
    expect(localStorage.getItem('token').length).toBeGreaterThan(0);
    expect(localStorage.getItem('nombre').length).toBeGreaterThan(0);
    expect(localStorage.getItem('apellido').length).toBeGreaterThan(0);
    expect(localStorage.getItem('dpi').length).toBeGreaterThan(0);
    expect(localStorage.getItem('colegiado').length).toBeGreaterThan(0);
    expect(localStorage.getItem('id').length).toBeGreaterThan(0);  
  });


  it('Verifica tamanio del token, devuelve true', ()=>{
    localStorage.setItem('token',"jajaja123456789pepe");
    const resp = service.estaLogueado()
    expect(resp).toBe(true);
  });

  it('Verifica tamanio del token, devuelve false', ()=>{
    localStorage.setItem('token','');
    const resp = service.estaLogueado()
    expect(resp).toBe(false);
  });


  xit('login correcto', () => {
    console.log('intentando el login');
    let respuesta;
    service.login('user4','123').subscribe(data=>{
      //console.log(data);
    });
    const request = mock.expectOne(URL_SERVICIOS + '/api/login')
    expect(request.request.method).toBe('GET');
    request.flush(Boolean);

  
  });



});