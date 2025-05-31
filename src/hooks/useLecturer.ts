import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useLoadingStore } from "../store/loadingStore";
import {
  AddLecturerInfo,
  AssignLecturer,
  Lecturer,
} from "../interfaces/lecturer.interfaces";
import { useLecturerStore } from "../store/lecturerStore";
import { toast } from "react-toastify";

export const useLecturer = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setLecturerData } = useLecturerStore();
  const dbUrl = "https://api.classnotifier.com.ng/api/lecturers/";
  const token = userData?.token;

  const getAllLecturers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const lecturerResponse = response.data as Lecturer[];
      setIsLoading(false);
      setLecturerData(lecturerResponse);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  const addLecturer = async (lecturerData: AddLecturerInfo) => {
    setIsLoading(true);
    try {
      await axios.post(`${dbUrl}add`, lecturerData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      toast.success("Lecturer added successfully!");
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  const assignLecturerToCourse = async (assignData: AssignLecturer) => {
    setIsLoading(true);
    try {
      await axios.post(`${dbUrl}add`, assignData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      toast.success("Lecturer assigned successfully!");
      window.location.reload();
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  return { addLecturer, getAllLecturers, assignLecturerToCourse };
};
