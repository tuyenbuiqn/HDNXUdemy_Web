import { Component, OnInit } from '@angular/core';
import { StudentServices } from 'src/app/core/services/student.service';
import { Course } from 'src/app/models/models/course';

@Component({
  selector: 'app-account-profile-courses',
  templateUrl: './account-profile-courses.component.html',
  styleUrls: ['./account-profile-courses.component.scss']
})
export class AccountProfileCoursesComponent implements OnInit {

  value: string = '100%';
  courses: Course[] = [];
  constructor(
    private readonly studentServices: StudentServices,
  ) { }

  ngOnInit() { 
    this.getDataCourseStudent();
  }

  getDataCourseStudent() {
    this.studentServices.getDataCourseOfStudent().subscribe((res) => {
      if (res.retCode === 0 && res.systemMessage === '') {
        this.courses = res.data;
      }
    });
  }

}
