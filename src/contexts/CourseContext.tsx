import { createContext, FC, useState } from "react";
import { AppProp } from "../interfaces";
import { CourseContextProps, CoursesState } from "../interfaces/course.interfaces";

export const CourseContext = createContext<CoursesState | null>(null);

const CourseProvider: FC<AppProp> = ({ children }) => {
  //Storing registeredCourses state...(test purposes)
  const [registeredCourses, setRegisteredCourses] = useState<CourseContextProps[]>([]);

  const getRegisteredCourses = async () => {
    //logic for fetching courses registered by user and setting state
    //setRegisteredCourses([...courses])
  };

  const contextValues = {
    registeredCourses,
    setRegisteredCourses,
    getRegisteredCourses,
  };

  return (
    <CourseContext.Provider value={contextValues}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
