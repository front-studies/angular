import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  namePortal: string;

  courses: string[] = ['Java', 'Ext JS', 'Angular']

  constructor() {
    this.namePortal = 'http://antoniogdias.com.br/';
  }

  ngOnInit() {
  }

}
