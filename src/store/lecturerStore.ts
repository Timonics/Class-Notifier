import { create } from "zustand";
import { Lecturer, LecturerState } from "../interfaces/lecturer.interfaces";

export const useLecturerStore = create<LecturerState>((set) => ({
  lecturerData: [],
  setLecturerData: (value: Lecturer[]) => set({lecturerData: value})
}));
