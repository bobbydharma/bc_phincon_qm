/* eslint-disable @typescript-eslint/no-explicit-any */
// stores/useProductStore.ts
import { create } from "zustand";
import CoueseAPI from "../services/api/course.api.js";
import type { CourseStateType } from "../types/course.type.js";

export const useCourseStore = create<
  CourseStateType & {
    getRunningCourse: () => Promise<void>;
  }
>((set) => ({
  coursesResponse: {
    courses: null,
    progressCourse: 0,
  },
  loading: false,
  error: null,
  message: null,
  status: null,

  getRunningCourse: async () => {
    set({ loading: true, error: null });
    try {
      const response = await CoueseAPI.getRunningCourses();
      set({
        loading: false,
        coursesResponse: {
          courses: response.data.courses,
          progressCourse: response.data.progressCourse,
        },
        message: response.message,
        status: response.status,
      });
    } catch (error: any) {
      set({
        loading: false,
        message: error.message,
        error: error.response?.data ?? "Terjadi kesalahan",
      });
    }
  },
}));
