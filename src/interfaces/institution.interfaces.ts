export interface InstitutionState {
  institutionData: Institution[];
  setInstitutionData: (value: Institution[]) => void;
}

export interface Institution {
  id: number;
  name: string;
  institutionType: string;
  createdAt: string;
  updatedAt: string;
  departmentCount: number;
  programCount: number;
  courseCount: number;
}

export interface InstitutionName {
  name: string;
}

export interface InstitutionResponse {
  message: string;
  institution: Institution;
}
