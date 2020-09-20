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

  it('Debe crearse', () => {
    expect(service).toBeTruthy();
  });


  
  it('Token debe ser mayor a 10', ()=>{
    localStorage.setItem('token','asdjfelkjdfenadfesskdfe5desfesdfe');
    service.cargarStorage(); 
    expect(service.token.length).toBeGreaterThan(10);
  });


  it('token vacio cargando storage', ()=>{
    localStorage.setItem('token','');
    service.cargarStorage(); 
    expect(service.token.length).toBeLessThanOrEqual(0);
  });


  it('Debe almacenar datos de usuario en el storage', ()=>{
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


  it('Valida el token y en caso de positivo, lo devuelve', ()=>{
    localStorage.setItem('token',"jajaja123456789pepe");
    const resp = service.estaLogueado()
    expect(resp).toBe(true);
  });

  it('Valida en token en casi de falso, lo devuelve', ()=>{
    localStorage.setItem('token','');
    const resp = service.estaLogueado()
    expect(resp).toBe(false);
  });


  xit('Login exitoso', () => {
    console.log('inicia login');
    let respuesta;
    service.login('user4','123').subscribe(data=>{
      //console.log(data);
    });
    const request = mock.expectOne(URL_SERVICIOS + '/api/login')
    expect(request.request.method).toBe('GET');
    request.flush(Boolean);

  
  });



});