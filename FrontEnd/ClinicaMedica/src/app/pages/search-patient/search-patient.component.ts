import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  
  borrarUsuario(paciente:any, i:number){
    console.log(paciente);
    console.log(i);



    Swal.fire({
      title: 'Esta Seguro?',
      text: 'Esta a punto de eliminar un Paciente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.value) {

            this.service.borrarPaciente(paciente._id).
            subscribe((data: any) => {

              this.patients.splice(i, 1);
              Swal.fire(
                'Deleted!',
                'Paciente eliminado!',
                'success'
              );

          }, err => {
            // console.log(err);
            Swal.fire(
              'Error',
                err,
              'error'
            );
            }
          );


        

      }
    });
    

  }

}
