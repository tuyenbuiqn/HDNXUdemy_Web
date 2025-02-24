export class Course {
    id: number;
    title: string;
    shortDescription: string;
    idAuthor?: number;
    totalStudentRegister?: number;
    totalChapter?: number;
    duration?: string;
    priceOfCourse?: number;
    isDiscount?: boolean;
    priceOfDiscount?: number;
    isFree: boolean;
    typeOfCourse?: string;
    introduce: string;
    idCategory: number;
    levelCourse: string;
    languages: string;
    description: string;
    publicId: string;
    pictureUrl: string;
    keyVideoUpload: string;
    fileUrl: string;
    totalVoteOfCourse?: number;
    categoryName?: string;
    userName?: string;
    processCourseName?: string;
    processCourse: number;
    fileUploadUrlStream?: string;
    isBookMark ?: boolean;
    isPurchase ?: boolean;
    vote1Star?: number;
    vote2Star? : number;
    vote3Star: number;
    vote4Star: number;
    vote5Star?: number;
    averageScore: number;
}