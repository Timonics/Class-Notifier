export interface LecturerState {
  lecturerData: Lecturer[];
  setLecturerData: (value: Lecturer[]) => void;
}

export interface Lecturer {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  Department: { id: number; name: string };
  Institution: null;
  Classes: [{ id: number; day: string; time: string }];
  Courses: [{ id: number; name: string; code: string }];
}

export interface AddLecturerInfo {
  name: string
  email: string
  phone_number: string
  department_id: number;
}

export interface AssignLecturer {
  lecturer_id: number 
}