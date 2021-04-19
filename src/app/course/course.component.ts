import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Course } from './course'
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Array<Course>;

  constructor(private courseService: CourseService) {
    this.courses = []
  }

  getCourseList(): void {
    //return dataCourses;
    this.courseService.getCourses().subscribe(cs => {
      this.courses = cs;
    });
  }

  ngOnInit() {
    this.getCourseList();
  }
}
