import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-Angular';


  

  mostraConsole() {
    const message = 'Title Message';
    console.log(message);

    let number1 = 1;
    let number2 = 2;

    let result = number1 + number2;

    console.log('Result: ' + result);

    if (result > 2) {
      console.log('Bigger then 2');
    }
  }
  
}
