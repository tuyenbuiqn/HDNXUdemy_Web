import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { GetCourseWithDetailsContent } from "src/app/models/respone_model/course-content-with-detail";

@Injectable({ providedIn: 'root' })
export class CartServices {
    constructor() { }
    private cartUpdates = new Subject<string>();
    public cartUpdates$ = this.cartUpdates.asObservable();
    public courseItems: GetCourseWithDetailsContent[] = [];
    public get count(): number {
        return this.courseItems.length;
    };

    addCourse(course: GetCourseWithDetailsContent) {

        let item: GetCourseWithDetailsContent = this.courseItems.find(item => item.id == course.id) as GetCourseWithDetailsContent;
        if (item) { return } else {
            course.totalOrder = course.isDiscount == true ? course.percentDiscount : course.priceOfCourse;
            this.courseItems.push(course)
        }
        this.cartUpdates.next();

    }

    removeCourse(course: GetCourseWithDetailsContent) {
        this.courseItems = this.courseItems.filter(item => item.id != course.id);
        this.cartUpdates.next();
    }
}