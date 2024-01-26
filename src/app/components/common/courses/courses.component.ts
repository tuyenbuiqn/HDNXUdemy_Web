import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Course } from 'src/app/models/models/course';
import { ListContentData } from 'src/app/models/respone_model/home-data';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    host: { class: 'd-block' },
})
export class CoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
    @Input() listCourse?: ListContentData | undefined | null = null;
    coursesSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-chevron'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1080: {
                items: 4
            }
        }
    }

    bookMarkCourse(){}

}