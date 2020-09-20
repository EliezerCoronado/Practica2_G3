import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template: `<div class="row">
    <div class="col-4">
      <h1>{{principal}}</h1>
    </div>
    <div class="col-6">
      <h4>{{randomText}}</h4>
    </div>
  </div>
  <img id="home" src="/assets/home.jpg" alt="image">`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  principal = "Bienvenido!";

  texts = [
    "Hoy es un buen día para trabajar :)",
    "Deber aprovechar tu día! :)",
    "Hola mundo :)",
    "Sale en vacaciones :)",
    "Practica 2 - tests :)",
    "En el mar la vida es mas sabrosa :)"
  ];

  randomText = '';

  constructor() { }

  ngOnInit(): void {
    this.randomText = this.getRandomText();
  }

  getRandomText = () => {
    let random = Math.floor(Math.random() * 5);
    return this.texts[random];
  }

}
