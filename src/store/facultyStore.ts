import { create } from "zustand";
import { Faculty, FacultyState } from "../interfaces/faculties.interfaces";

export const useFacultyStore = create<FacultyState>((set) => ({
    facultyData: [],
    setFacultyData: (value: Faculty[]) => set({facultyData: value})
}))