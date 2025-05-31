import { create } from "zustand";
import {
  InstitutionState,
  Institution,
} from "../interfaces/institution.interfaces";

export const useInstitutionStore = create<InstitutionState>((set) => ({
  institutionData: [],
  setInstitutionData: (value: Institution[]) => set({ institutionData: value }),
}));
