import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  username:string;

  constructor(private http: HttpClient) { }

  saveStorage(username){
    localStorage.setItem('username',username);
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
          this.saveStorage(user.usuario);
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



