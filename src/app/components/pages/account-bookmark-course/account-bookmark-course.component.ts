import { Component, OnInit } from '@angular/core';
import { CourseServices } from 'src/app/core/services/course.service';
import { StudentServices } from 'src/app/core/services/student.service';
import { Course } from 'src/app/models/models/course';

@Component({
  selector: 'app-account-bookmark-course',
  templateUrl: './account-bookmark-course.component.html',
  styleUrls: ['./account-bookmark-course.component.scss']
})
export class AccountBookmarkCourseComponent implements OnInit {
  value: string = '100%';
  course: Course[] = [];
  constructor(
    private readonly studentServices: StudentServices,
  ) { }

  ngOnInit() {

    this.loadListBookmarkCourseOfUser();
  }


  loadListBookmarkCourseOfUser() {
    this.studentServices.getListBookmarkCourse().subscribe((res) => {
      if (res.retCode === 0 && res.systemMessage === '') {
        this.course = res.data;
      } else {
        this.course = [];
      }
    })
  }
}
