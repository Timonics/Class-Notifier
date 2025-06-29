import axios from "axios";
import { useLoadingStore } from "../../store/admin/loadingStore";
import { useAuthStore } from "../../store/admin/authStore";
import { useProgramStore } from "../../store/admin/programStore";
import {
  Program,
  ProgramData,
  ProgramResponse,
} from "../../interfaces/admin/programs.interfaces";
import { toast } from "react-toastify";
import { showError } from "../../utils/toast";

export const useProgram = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setProgramData } = useProgramStore();
  const dbUrl: string = `${import.meta.env.VITE_DB_URL}programs/`
  const token = userData?.token;

  const getPrograms = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);
      const programsResponse = response.data as Program[];
      setIsLoading(false);
      setProgramData(programsResponse);
    } catch (err) {
      setIsLoading(false);
      showError("Error fetching programs");
    }
  };

  const addProgram = async (program: ProgramData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}add`, program, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const programResponse = response.data;
      console.log(programResponse);
      setIsLoading(false);
      toast.success("Program added successfully!");
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error adding program");
    }
  };

  const editProgram = async (
    programId: number,
    programData: {
      name: string;
    }
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`${dbUrl}${programId}`, programData, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      });

      const programResponse = response.data as ProgramResponse;
      setIsLoading(false);
      toast.success(programResponse.message);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error editing program");
    }
  };

   const deleteProgram = async (programId: number) => {
    setIsLoading(true);
    try {
      await axios.delete(`${dbUrl}${programId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      toast.success("Program successfully deleted");
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error deleting program");
    }
  };

  return {
    getPrograms,
    addProgram,
    editProgram,
    deleteProgram
  };
};
