import { Injectable } from '@angular/core';

@Injectable()
// {
  // providedIn: 'root'
// }
export class CoursesService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }
}
