import { useContext } from "react";
import { CourseContext } from "../../contexts/CourseContext";
import axios from "axios";
import { useAuthStore } from "../../store/admin/authStore";
import { useLoadingStore } from "../../store/admin/loadingStore";
import { useCourseStore } from "../../store/admin/courseStore";
import {
  Course,
  CourseData,
  CourseResponse,
} from "../../interfaces/admin/course.interfaces";
import { toast } from "react-toastify";
import { showError } from "../../utils/toast";

const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("context must be provided within the CourseProvider");
  }
  return context;
};

export { useCourse };

export const useCourses = () => {
  const { userData } = useAuthStore();
  const { setCourseData } = useCourseStore();
  const { setIsLoading } = useLoadingStore();
  const dbUrl = "https://api.classnotifier.com.ng/api/courses/";
  const token = userData?.token;

  const addCourse = async (courseData: Partial<Course>) => {
    try {
      const response = await axios.post(`${dbUrl}create`, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const courseResponse = response.data;
      console.log(courseResponse);
      setIsLoading(false);
      toast.success("Course added successfully!");
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error adding course");
    }
  };

  const getAllCourses = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const courseResponse = response.data as CourseData[];
      setCourseData(courseResponse);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      showError("Error fetching courses");
    }
  };

  const getCourse = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const courseResponse = response.data as CourseData[];
      setIsLoading(false);
      setCourseData(courseResponse);
    } catch (err) {
      setIsLoading(false);
      showError("Error fetching course");
    }
  };
  const editCourse = async (
    courseId: number,
    courseData: {
      code: string;
    }
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`${dbUrl}${courseId}`, courseData, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      });

      const courseResponse = response.data as CourseResponse;
      setIsLoading(false);
      toast.success(courseResponse.message);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error editing courses");
    }
  };

  const deleteCourse = async (courseId: number) => {
    setIsLoading(true);
    try {
      await axios.delete(`${dbUrl}${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      toast.success("Course successfully deleted");
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error deleting course");
    }
  };
  return { addCourse, getAllCourses, getCourse, editCourse, deleteCourse };
};
