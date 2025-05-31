export interface DepartmentState {
  departmentData: Department[];
  setDepartmentData: (value: Department[]) => void;
  department: DepartmentById | null;
  setDepartment: (value: DepartmentById) => void;
}

export interface Department {
  id: number;
  name: string;
  institution_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface DepartmentData {
  name: string;
  institution_id: number;
}

export interface DepartmentResponse {
  message: string;
  department: Department;
}

export interface DepartmentById {
  id: number;
  name: string;
  institution_id: number;
  createdAt: string;
  updatedAt: string;
  Institution: {
    id: number;
    name: string;
  };
  Courses: [
    {
      id: number;
      name: string;
      code: string;
    }
  ];
  studentCount: number;
}
