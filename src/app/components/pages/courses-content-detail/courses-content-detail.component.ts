import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import "@mux/mux-player";
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgVideo from 'lightgallery/plugins/video';
import { UserCommentCoursesComponent } from '../../dialog/user-comment-courses/user-comment-courses.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserReviewCoursesComponent } from '../../dialog/user-review-courses/user-review-courses.component';

@Component({
  selector: 'app-courses-content-detail',
  templateUrl: './courses-content-detail.component.html',
  styleUrls: ['./courses-content-detail.component.scss'],
  host: { class: 'd-block' },
})
export class CoursesContentDetailComponent implements OnInit {

  private modalService = inject(NgbModal);
  isDisplayReplay = false;
  isComment = false;
  panels = ['Cài đắt hệ thống', 'Thiết lập máy tính', 'Cài đặt thông tinh','Cài đắt hệ thống', 'Thiết lập máy tính', 'Cài đặt thông tinh'];
  constructor() { }

  ngOnInit() {
  }

  selectedVideoUrl: string;

  selectCourse(course: { videoUrl: string; }) {
    this.selectedVideoUrl = course.videoUrl;
  }

  settings = {
    counter: false,
    plugins: [lgVideo]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  // Tabs
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

  openModalCommentUser() {
    const modalRef = this.modalService.open(UserCommentCoursesComponent, {size: 'xl'});
    modalRef.componentInstance.name = 'World';
  }

  openModalReviewCourses() {
    const modalRef = this.modalService.open(UserReviewCoursesComponent, {size: 'xl'});
    modalRef.componentInstance.reviewOfUser = 'Khoá học này rất tốt';
  }

  replayComment(){
    this.isDisplayReplay = true;
  }
}
