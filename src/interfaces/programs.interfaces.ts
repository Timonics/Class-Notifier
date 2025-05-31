export interface ProgramState {
  programData: Program[];
  setProgramData: (value: Program[]) => void;
}

export interface Program {
  id: number;
  name: string;
  department_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProgramData {
  name: string;
  department_id: number;
}

export interface ProgramResponse {
  message: string;
  department: Program;
}
