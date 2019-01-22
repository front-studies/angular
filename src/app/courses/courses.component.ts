import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  namePortal: string;

  courses: string[];

  constructor(private coursesService: CoursesService) {
    this.namePortal = 'http://antoniogdias.com.br/';

    // for (let i = 0; i < this.courses.length; i++) {
    //   let curso = this.courses[i];
    // }

    // var servico = new CoursesService();

    this.courses = this.coursesService.getCursos();
  }

  ngOnInit() {
  }

}
