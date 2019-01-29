import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'accountant',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['changeValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increases() {
    this.value++;
    this.changeValue.emit({newValue: this.value});
  }

  decrements() {
    this.value--;
    this.changeValue.emit({newValue: this.value});
  }

}
