export interface CourseType {
  id: string;
  code: string;
  title: string;
  description: string | null;
  order: number;
  data: DataCourseType;
  tag: string;
  active: number;
  createdAt: string;
  updatedAt: string;
}

export interface DataCourseType {
  icon: string;
  type: string;
  telegram: {
    shortId: string;
  };
  startDate: string;
  endDate: string;
}

export interface CourseStateType {
  coursesResponse: {
    courses: CourseType[] | null;
    progressCourse: number;
  };
  loading: boolean;
  error: string | null;
  message: string | null;
  status: number | null;
}
