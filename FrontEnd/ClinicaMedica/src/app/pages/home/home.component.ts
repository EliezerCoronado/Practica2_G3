import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
