import { _ParseAST } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  forma: FormGroup
  constructor(private servicio:UsuarioService) { }
  
  sonIguales(campo1:string, campo2:string){
    
    return(group:FormGroup)=>{
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if(pass1===pass2){
        return null;
      }
      return{
        sonIguales:true
      }
    }
  }

  ngOnInit(): void {
    this.forma = new FormGroup({
      firstName: new FormControl('Eliezer Isai', Validators.required),
      lastName: new FormControl('Coronado Morales',Validators.required),
      userName: new FormControl('user1', Validators.required),
      dpi: new FormControl('123',Validators.required),
      colegiado: new FormControl('123', Validators.required),
      genero: new FormControl(null, Validators.required),
      password: new FormControl('123', Validators.required),
      password2: new FormControl('123', Validators.required)
    },{validators: this.sonIguales('password','password2')});
  }

  registrarMedico(){
    //console.log(this.forma.value)
    
    if(this.forma.invalid){
      console.log('formulario invalido')
      return false;
    }

    this.servicio.crearMedico(this.forma.value).subscribe( (data:boolean)=>{
        if(data === true){
          console.log('medico creado')
        }else{
          console.log('medico no creado');
        }
    });

  }

}
