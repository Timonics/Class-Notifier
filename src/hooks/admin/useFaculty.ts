import axios from "axios";
import { Faculty, FacultyData } from "../../interfaces/admin/faculties.interfaces";
import { useFacultyStore } from "../../store/admin/facultyStore";
import { useLoadingStore } from "../../store/admin/loadingStore";
import { useAuthStore } from "../../store/admin/authStore";
import { showError } from "../../utils/toast";

export const useFaculty = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setFacultyData } = useFacultyStore();
  const dbUrl: string = import.meta.env.VITE_DB_URL;

  const getFaculties = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);

      const facultiesResponse = response.data as Faculty[];
      setIsLoading(false);
      setFacultyData(facultiesResponse);
    } catch (err) {
      setIsLoading(false);
      showError("Error fetching faculty");
    }
  };

  const addFaculty = async (faculty: FacultyData) => {
    setIsLoading(true);
    try {
      const token = userData?.token;
      await axios.post(`${dbUrl}add`, faculty, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      setIsLoading(false);
      showError("Error adding faculty");
    }
  };

  return {
    getFaculties,
    addFaculty,
  };
};
