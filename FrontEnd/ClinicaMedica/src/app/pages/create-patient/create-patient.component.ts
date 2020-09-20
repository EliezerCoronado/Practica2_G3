import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  validationMessage: string;
  angForm: FormGroup;

  patient = {
    nombre: '',
    apellido: '',
    DPI: undefined,
    descripcion: '',
    genero: undefined,
    medico: localStorage.getItem('id')
  }

  constructor(private fb: FormBuilder, public servicio: UsuarioService) {
    this.angForm = this.createForm();
  }

  ngOnInit(): void {
  }


  createForm() {
    let form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      dpi: ['', Validators.required]
    });

    return form;
  }

  registrarPaciente(forma:any){
    console.log(forma.value);
    this.servicio.crearPaciente(forma.value).subscribe(resp=>{
      Swal.fire({
        icon: 'success',
        title:'Success',
        text:'Paciente Creado'
      });
      return 1;
    },err=>{
      Swal.fire({
        icon: 'error',
        title:'Error',
        text:'Error no se pudo crear el paciente'
      });
      return 0;

    })

  }

}
