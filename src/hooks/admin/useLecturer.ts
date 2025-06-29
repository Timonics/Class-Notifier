import axios from "axios";
import { useAuthStore } from "../../store/admin/authStore";
import { useLoadingStore } from "../../store/admin/loadingStore";
import {
  AddLecturerInfo,
  AssignLecturer,
  Lecturer,
} from "../../interfaces/admin/lecturer.interfaces";
import { useLecturerStore } from "../../store/admin/lecturerStore";
import { toast } from "react-toastify";
import { showError } from "../../utils/toast";

export const useLecturer = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setLecturerData } = useLecturerStore();
  const dbUrl: string = import.meta.env.VITE_DB_URL
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
      setIsLoading(false);
      showError("Error deleting lecturers");
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
      setIsLoading(false);
      showError("Error adding lecturer");
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
      setIsLoading(false);
      showError("Error assigning lecturer");
    }
  };

  return { addLecturer, getAllLecturers, assignLecturerToCourse };
};
