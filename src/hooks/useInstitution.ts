import axios from "axios";
import { useInstitutionStore } from "../store/institutionStore";
import {
  Institution,
  InstitutionName,
  InstitutionResponse,
} from "../interfaces/institution.interfaces";
import { useLoadingStore } from "../store/loadingStore";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";

const useInstitution = () => {
  const dbUrl = "https://api.classnotifier.com.ng/api/institutions/";
  const { setInstitutionData } = useInstitutionStore();
  const { setIsLoading } = useLoadingStore();
  const { userData } = useAuthStore();
  const token = userData?.token;

  const getInstitutions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);
      const institutionsResponse = response.data as Institution[];
      console.log(institutionsResponse);
      setIsLoading(false);
      setInstitutionData(institutionsResponse);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  const addInstitution = async (institution: InstitutionName) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}add`, institution, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const addInstitutionResponse = response.data as InstitutionResponse;
      setIsLoading(false);
      toast.success(addInstitutionResponse.message);
      window.location.reload();
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  const editInstitution = async (
    institutionId: number,
    institutionUpdate: {
      institutionType: string;
    }
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${dbUrl}${institutionId}/edit`,
        institutionUpdate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const institutionsResponse = response.data as InstitutionResponse;
      setIsLoading(false);
      toast.success(institutionsResponse.message);
      window.location.reload();
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  const deleteInstitution = async (institutionId: number) => {
    setIsLoading(true);
    try {
      await axios.delete(`${dbUrl}${institutionId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      toast.success("Institution successfully deleted");
      window.location.reload();
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  return {
    getInstitutions,
    addInstitution,
    editInstitution,
    deleteInstitution,
  };
};

export { useInstitution };
