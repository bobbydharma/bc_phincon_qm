export interface CourseModel {
    id: string;
    code: string;
    title: string;
    description: string;
    order: number;
    tag: string;
    active: number;
    data?: JSON;
}