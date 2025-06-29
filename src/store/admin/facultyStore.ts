import { create } from "zustand";
import { Faculty, FacultyState } from "../../interfaces/admin/faculties.interfaces";

export const useFacultyStore = create<FacultyState>((set) => ({
    facultyData: [],
    setFacultyData: (value: Faculty[]) => set({facultyData: value})
}))