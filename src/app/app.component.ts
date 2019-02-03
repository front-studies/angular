import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  value: number = 5;
  deleteCycle: boolean = false;

  changeValue() {
    this.value++;
  }

  cycleDestroy() {
    this.deleteCycle = true;
  }
}
