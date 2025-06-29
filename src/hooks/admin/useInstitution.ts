import axios from "axios";
import { useInstitutionStore } from "../../store/admin/institutionStore";
import {
  Institution,
  InstitutionName,
  InstitutionResponse,
} from "../../interfaces/admin/institution.interfaces";
import { useLoadingStore } from "../../store/admin/loadingStore";
import { useAuthStore } from "../../store/admin/authStore";
import { showError, showSuccess } from "../../utils/toast";

const useInstitution = () => {
  const dbUrl = `${import.meta.env.VITE_DB_URL}institutions/`
  const { setInstitutionData } = useInstitutionStore();
  const { setIsLoading } = useLoadingStore();
  const { userData } = useAuthStore();
  const token = userData?.token;

  const getInstitutions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);
      const institutionsResponse = response.data as Institution[];
      setIsLoading(false);
      setInstitutionData(institutionsResponse);
    } catch (err) {
      setIsLoading(false);
      showError("Error fetching institution");
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
      showSuccess(addInstitutionResponse.message);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error adding institution");
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
      showSuccess(institutionsResponse.message);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error editing institution");
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
      showSuccess("Institution successfully deleted");
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error deleting institution");
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
