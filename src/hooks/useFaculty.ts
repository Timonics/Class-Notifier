import axios from "axios";
import { Faculty, FacultyData } from "../interfaces/faculties.interfaces";
import { useFacultyStore } from "../store/facultyStore";
import { useLoadingStore } from "../store/loadingStore";
import { useAuthStore } from "../store/authStore";

export const useFaculty = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setFacultyData } = useFacultyStore();
  const dbUrl = "https://api.classnotifier.com.ng/api/faculties/";

  const getFaculties = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);

      const facultiesResponse = response.data as Faculty[];
      setIsLoading(false);
      setFacultyData(facultiesResponse);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  return {
    getFaculties,
    addFaculty,
  };
};
