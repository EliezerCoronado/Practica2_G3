import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma:FormGroup;
  constructor(
              public route: Router,
              public service: UsuarioService
              ) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  ingresar(){

    // console.log(this.forma.value);

    if(this.forma.invalid){
      Swal.fire({
        icon:'error',
        title:'Error',
        text: 'Error'
      });
      return false;
    }

    this.service.login(this.forma.value.userName, this.forma.value.password).subscribe(
      (data:boolean)=>{
        // console.log(data)
        if(data === true){
          //this.route.navigate(['/dashboard']);
          return true;
        }
      },
      err => {
        //console.log(err);
        Swal.fire({
          icon: 'error',
          title:'Error de credenciales',
          text:'Error'
        });
        return false;
      }
    )
    
  }

}
