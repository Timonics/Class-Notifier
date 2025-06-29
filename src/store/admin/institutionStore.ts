import { create } from "zustand";
import {
  InstitutionState,
  Institution,
} from "../../interfaces/admin/institution.interfaces";

export const useInstitutionStore = create<InstitutionState>((set) => ({
  institutionData: [],
  setInstitutionData: (value: Institution[]) => set({ institutionData: value }),
  institutionSearchTerm: "",
  setInstitutionSearchTerm: (value: string) => set({institutionSearchTerm: value}),
  filterSelected: "",
  setFilterSelected: (value: string) => set({filterSelected: value})
}));
