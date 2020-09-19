import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    medico: localStorage.getItem('colegiado')
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      dpi: ['', Validators.required]
    });
  }

}
