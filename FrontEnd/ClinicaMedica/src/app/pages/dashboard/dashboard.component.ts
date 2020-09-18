import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private services: UsuarioService) { }
  
  id='';

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.services.getPacientes(this.id)
    .subscribe((data:any) =>{
      console.log(data);
    },
    err =>{
      console.log(err);
    })
  }

}
