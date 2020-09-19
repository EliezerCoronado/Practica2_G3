import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {

  patients = [];

  constructor(public service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getPacientes(localStorage.getItem('colegiado')).subscribe(
      (data: Array<string>) => {
        console.log(data)
        this.patients = data['pacientes'];
      },
      err => {

      }
    )
  }

}
