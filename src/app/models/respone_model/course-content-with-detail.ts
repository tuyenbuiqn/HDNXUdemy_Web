import { Course } from "../models/course";
import { CourseContent, CourseContentDetails } from "../models/course-content";
import { StudentUser } from "../models/student-user";

export class CourseContentWithDetails extends CourseContent {
    contentAndContentDetails: CourseContentDetails[];
}

export class GetCourseWithDetailsContent extends Course {
    listContentCourseDetails : CourseContentWithDetails[];
    listCourseRate: Course[];
    author : StudentUser;
}


export class ContentAndDetails extends CourseContent {
    listContentCourseDetails: CourseContentDetails[];
}