import { create } from "zustand";
import {
  Department,
  DepartmentById,
  DepartmentState,
} from "../../interfaces/admin/department.interfaces";

export const useDepartmentStore = create<DepartmentState>((set) => ({
  departmentData: [],
  setDepartmentData: (value: Department[]) => set({ departmentData: value }),
  department: null,
  setDepartment: (value: DepartmentById) => set({ department: value }),
  departmentSearchTerm: "",
  setDepartmentSearchTerm: (value: string) =>
    set({ departmentSearchTerm: value }),
  filterSelected: "",
  setFilterSelected: (value: string) => set({ filterSelected: value }),
}));
