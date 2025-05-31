import axios from "axios";
import { useLoadingStore } from "../store/loadingStore";
import { useAuthStore } from "../store/authStore";
import { useProgramStore } from "../store/programStore";
import {
  Program,
  ProgramData,
  ProgramResponse,
} from "../interfaces/programs.interfaces";
import { toast } from "react-toastify";

export const useProgram = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setProgramData } = useProgramStore();
  const dbUrl = "https://api.classnotifier.com.ng/api/programs/";
  const token = userData?.token;

  const getPrograms = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);
      const programsResponse = response.data as Program[];
      setIsLoading(false);
      setProgramData(programsResponse);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  return {
    getPrograms,
    addProgram,
    editProgram,
    deleteProgram
  };
};
