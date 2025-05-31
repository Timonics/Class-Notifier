import axios from "axios";
import { useLoadingStore } from "../store/loadingStore";
import { useAuthStore } from "../store/authStore";
import {
  Department,
  DepartmentById,
  DepartmentData,
  DepartmentResponse,
} from "../interfaces/department.interfaces";
import { useDepartmentStore } from "../store/departmentStore";
import { toast } from "react-toastify";

export const useDepartment = () => {
  const { userData } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setDepartmentData, setDepartment } = useDepartmentStore();
  const dbUrl = "https://api.classnotifier.com.ng/api/departments/";
  const token = userData?.token;

  const getDepartments = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}get`);

      const departmentsResponse = response.data as Department[];
      setIsLoading(false);
      setDepartmentData(departmentsResponse);
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
      console.error("Error: ", err);
      setIsLoading(false);
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
    } catch (err) {
      console.error("Error: ", err);
      setIsLoading(false);
    }
  };

  return {
    getDepartments,
    addDepartment,
    editDepartment,
    getDepartment,
    deleteDepartment
  };
};
