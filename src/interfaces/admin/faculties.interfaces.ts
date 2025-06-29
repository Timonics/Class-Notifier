export interface FacultyState {
  facultyData: Faculty[];
  setFacultyData: (value: Faculty[]) => void;
}

export interface Faculty {
  id: number;
  name: string;
  institution_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface FacultyData {
  name: string;
  institution_id: number;
}
