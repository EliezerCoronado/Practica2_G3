import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private services: UsuarioService, private router: Router) { }

  id = '';

  ngOnInit(): void {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.id = localStorage.getItem('id');

    this.services.getPacientes(this.id)
      .subscribe((data: any) => {
        //console.log(data);
      },
        err => {
          //console.log(err);
        })
  }

  logout() {
    this.clearLocalStorage();
    this.router.navigate(['/login']);
  }

  clearLocalStorage = () => {
    localStorage.setItem('username', '');
    localStorage.setItem('token', '');
    localStorage.setItem('nombre', '');
    localStorage.setItem('apellido', '');
    localStorage.setItem('dpi', '');
    localStorage.setItem('colegiado', '');
    localStorage.setItem('id', '');
  }

}
