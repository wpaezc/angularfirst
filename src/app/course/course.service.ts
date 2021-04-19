import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Course } from './course';


@Injectable({
  providedIn: 'root'
})

export class CourseService {
  //private apiUrl = environment.baseUrl + 'courses.json';
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }
}
