import { create } from "zustand";
import { CourseData, CourseState } from "../../interfaces/admin/course.interfaces";

export const useCourseStore = create<CourseState>((set) => ({
  courseData: [],
  setCourseData: (value: CourseData[]) => set({ courseData: value }),
}));
