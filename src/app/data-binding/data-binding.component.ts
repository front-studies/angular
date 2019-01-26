import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://antoniogdias.com.br';
  courseAngular: boolean = true;
  urlImage = 'http://lorempixel.com/400/200/nature/';

  currentValue: string = '';
  valueSaved: string = '';

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

  buttonClicked() {
    alert('Button clicked');
  }

  onKeyUp(event: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value) {
    this.valueSaved = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
