import { StudentUser } from "./student-user";

export class CourseEvaluation {
    idStudent: number;
    idCourse: number;
    voteStartNumber: number;
    commentEvaluation: string;
    like?: number;
    disLike?: number;
    users?: StudentUser;
}