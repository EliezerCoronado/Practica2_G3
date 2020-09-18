import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_SERVICIOS } from '../config/config';
import { first, map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  username:string;
  token: string;
  id:string;
  firstName: string;
  lastName: string;
  dpi: string;
  colegiado: string;

  constructor(private http: HttpClient) { 
    this.cargarStorage();
  }


  cargarStorage(){
    if ( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.username = localStorage.getItem('username');
      this.firstName = localStorage.getItem('nombre');
      this.lastName = localStorage.getItem('apellido');
      this.colegiado = localStorage.getItem('colegiado');
      this.dpi = localStorage.getItem('dpi');
    }else{
      this.token = '';
      this.id = '';
      this.username = '';
      this.firstName = '';
      this.lastName = '';
      this.colegiado = '';
      this.dpi = '';
    }
  }

  saveStorage(username, token, firstName, lastName, dpi, colegiado,id){
    localStorage.setItem('username',username);
    localStorage.setItem('token', token);
    localStorage.setItem('nombre', firstName);
    localStorage.setItem('apellido', lastName);
    localStorage.setItem('dpi',dpi);
    localStorage.setItem('colegiado',colegiado);
    localStorage.setItem('id',id);
    
  }

  estaLogueado(){
    this.cargarStorage();
    if (this.token.length > 10){
      return true;
    }else{
      return false;
    }
  }


  login(Username: string, Password: string){
    const user = {
      usuario: Username,
      password: Password
    };
    console.log(user);

    const url = URL_SERVICIOS + '/api/login'
    return this.http.post(url,user).pipe(
      map((resp:any) =>{
        console.log(resp);
        if(resp.ok === false){
          Swal.fire({
            icon:'error',
            title:'Error',
            text:'Error de credenciales'
          });
          return false;
        }else{
          this.saveStorage(resp.medico.usuario, 
                          resp.token, resp.medico.nombre, 
                          resp.medico.apellido, 
                          resp.medico.DPI, 
                          resp.medico.colegiado,
                          resp.medico._id);
          return true;
        }
      })
    );

  }


  crearMedico(forma:any){
    const medico = {
        nombre: forma.firstName,
        apellido: forma.lastName,
        usuario: forma.userName,
        password: forma.password,
        DPI: forma.dpi,
        colegiado: forma.colegiado,
        genero: forma.genero
    }
    console.log('creando usuario')
    console.log(forma);
    const url =  URL_SERVICIOS + '/api/medicos';  
    return this.http.post(url,medico).pipe(
      map((resp:any) =>{
        if(resp.ok === true){
          Swal.fire({
            icon:'error',
            title:'Error',
            text:'Medico creado'
          });
          return true;
        }else{
          console.log('error pe');
          return false;
        }
      })
    );

  }
}



