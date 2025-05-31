import { create } from "zustand";
import {
  Department,
  DepartmentById,
  DepartmentState,
} from "../interfaces/department.interfaces";

export const useDepartmentStore = create<DepartmentState>((set) => ({
  departmentData: [],
  setDepartmentData: (value: Department[]) => set({ departmentData: value }),
  department: null,
  setDepartment: (value: DepartmentById) => set({department: value})
}));
