import axios from "axios";
import { useLoadingStore } from "../../store/admin/loadingStore";
import { useAuthStore } from "../../store/admin/authStore";
import {
  Department,
  DepartmentById,
  DepartmentData,
  DepartmentResponse,
} from "../../interfaces/admin/department.interfaces";
import { useDepartmentStore } from "../../store/admin/departmentStore";
import { toast } from "react-toastify";
import { showError } from "../../utils/toast";

export const useDepartment = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setDepartmentData, setDepartment } = useDepartmentStore();
  const dbUrl: string = `${import.meta.env.VITE_DB_URL}departments/`;
  const token = userData?.token;

  const getDepartments = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);

      const departmentsResponse = response.data as Department[];
      setIsLoading(false);
      setDepartmentData(departmentsResponse);
    } catch (err) {
      setIsLoading(false);
      showError("Error fetching departments");
    }
  };

  const addDepartment = async (department: DepartmentData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}add`, department, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const departmentsResponse = response.data as DepartmentResponse;

      setIsLoading(false);
      toast.success(departmentsResponse.message);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error adding department");
    }
  };

  const editDepartment = async (
    departmentId: number,
    departmentData: {
      name: string;
    }
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        `${dbUrl}${departmentId}`,
        departmentData,
        {
          headers: {
            Authorization: `Bearer ${userData?.token}`,
          },
        }
      );

      const departmentsResponse = response.data as DepartmentResponse;
      setIsLoading(false);
      toast.success(departmentsResponse.message);
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error editing department");
    }
  };

  const deleteDepartment = async (departmentId: number) => {
    setIsLoading(true);
    try {
      await axios.delete(`${dbUrl}${departmentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      toast.success("Department successfully deleted");
      window.location.reload();
    } catch (err) {
      setIsLoading(false);
      showError("Error deleting department");
    }
  };

  const getDepartment = async (departmentId: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}${departmentId}`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      });

      const departmentsResponse = response.data as DepartmentById;
      setIsLoading(false);
      setDepartment(departmentsResponse);
    } catch (err: any) {
      setIsLoading(false);
      if (err.message) showError(err.message);
      else showError("Error fetching department");
    }
  };

  return {
    getDepartments,
    addDepartment,
    editDepartment,
    getDepartment,
    deleteDepartment,
  };
};
