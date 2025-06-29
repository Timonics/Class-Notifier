import axios from "axios";
import { AddCourseData } from "../../interfaces/student/course.interface";
import { useStudentAuthStore } from "../../store/student/studentAuthStore";

export const useCourse = () => {
  const dbUrl = import.meta.env.VITE_DB_URL;
  const {studentToken} = useStudentAuthStore()

  const addStudentCourse = async (courseIds: AddCourseData, studentId: number) => {
    try {
      await axios.patch(`${dbUrl}students/${studentId}/courses`, courseIds, {
        headers: {
            Authorization: `Bearer ${studentToken}`
        }
      });
    } catch (err) {}
  };

  return {addStudentCourse};
};
