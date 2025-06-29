export interface CourseState {
  courseData: CourseData[];
  setCourseData: (value: CourseData[]) => void;
}

export interface CourseContextProps {
  courseCode: string;
  courseName: string;
  courseLecturer: string;
  courseColorCode?: string;
  lectureDateTime?: string
}

export interface CoursesState {
  registeredCourses: CourseContextProps[];
  setRegisteredCourses: React.Dispatch<React.SetStateAction<CourseContextProps[]>>
  getRegisteredCourses: () => Promise<void>;
}

export interface CourseData {
  id: number;
  name: string;
  code: string;
  program_id: number;
  institution_id: number;
  department_id: number;
  createdAt: string;
  updatedAt: string;
  Institution: {
    id: number;
    name: string;
  };
  Department: {
    id: number;
    name: string;
  };
  Program: {
    id: number;
    name: string;
  };
  Lecturers: [
    {
      id: number;
      name: string;
      email: string;
    }
  ];
}

export interface Course {
  id: number;
  name: string;
  code: number;
  program_id: number;
  institution_id: number;
  department_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseResponse {
  message: string;
  course: Course;
}
