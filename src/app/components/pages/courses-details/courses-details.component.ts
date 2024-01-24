import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ActivatedRoute } from '@angular/router';
import { CourseServices } from 'src/app/core/services/course.service';
import { GetCourseWithDetailsContent } from 'src/app/models/respone_model/course-content-with-detail';
import lightGallery from 'lightgallery';

@Component({
    selector: 'app-courses-details',
    templateUrl: './courses-details.component.html',
    styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {

    constructor(
        private readonly router: ActivatedRoute,
        private readonly courseServices: CourseServices
    ) { }
    idCourse: number = 0;
    courseContentCourse: GetCourseWithDetailsContent | null | undefined;
    isLoading = false;
    ngOnInit(): void {
        this.idCourse = Number(this.router.snapshot.paramMap.get('id'));
        this.loadDataOfContent(this.idCourse);


    }

    settings = {
        counter: false,
        plugins: [lgVideo],
        videojs: true,
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

    loadDataOfContent(id: number) {
        this.isLoading = true;
        this.courseServices.getCourses(id).subscribe((res) => {
            if (res.retCode === 0 && res.systemMessage === '') {
                this.courseContentCourse = res.data;
                this.isLoading = false;
            } else {
                this.isLoading = false;
            }
        });
    }

}