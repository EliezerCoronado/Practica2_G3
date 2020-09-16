import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router,
              public service: UsuarioService) { }

  ngOnInit(): void {
  }


  ingresar(forma:any){
    
    if(forma.invalid){
      return false;
    }

    //this.service.l
    
  }

}
