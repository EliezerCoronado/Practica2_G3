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
    this.service.getPacientes(localStorage.getItem('id')).subscribe(
      (data: Array<string>) => {
        this.patients = data['pacientes'];
        this.patients.sort(this.orderPatientByDPI);
      },
      err => {

      }
    )
  }

  orderPatientByDPI = (a, b) => {
    if (a.DPI < b.DPI) {
      return -1;
    }
    if (a.DPI > b.DPI) {
      return 1;
    }
    return 0;
  }

}
