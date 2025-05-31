import { create } from "zustand";
import { Program, ProgramState } from "../interfaces/programs.interfaces";

export const useProgramStore = create<ProgramState>((set) => ({
  programData: [],
  setProgramData: (value: Program[]) => set({ programData: value }),
}));
