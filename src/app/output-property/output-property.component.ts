import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'accountant',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['changeValue']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter();

  @ViewChild('fieldInput') fieldValueInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  increases() {
    console.log(this.fieldValueInput);
    this.fieldValueInput.nativeElement.value++;
    this.changeValue.emit({newValue: this.value});
  }

  decrements() {
    this.fieldValueInput.nativeElement.value--;
    this.changeValue.emit({newValue: this.value});
  }

}
