import { useContext } from "react";
import { CourseContext } from "../contexts/CourseContext";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useLoadingStore } from "../store/loadingStore";
import { useCourseStore } from "../store/courseStore";
import {
  Course,
  CourseData,
  CourseResponse,
} from "../interfaces/course.interfaces";
import { toast } from "react-toastify";

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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };
  return { addCourse, getAllCourses, getCourse, editCourse, deleteCourse };
};
