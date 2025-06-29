import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import OnboardingLayout from "../layout/onboarding";
import Home from "../pages/students/home";
import AuthPage from "../pages/students/auth";
import ResetPassword from "../pages/students/auth/reset-password";
import UpdateProfilePage from "../pages/students/profile/updateProfile";
import CustomizeClass from "../pages/students/classes/customizeClass";
import AddRegisteredCourses from "../pages/students/courses/addRegisteredCourses";
import MainPageLayout from "../layout/mainPage";
import ClassesPage from "../pages/students/classes";
import ExamsPage from "../pages/students/exams";
import AnnouncementPage from "../pages/students/announcements";
import MainPage from "../pages/students/main";
import LiveClasses from "../pages/students/live-classes";
import Profile from "../pages/students/profile";
import MyProfile from "../pages/students/profile/myProfile";
import ChangeProgram from "../pages/students/changeOfProgram";
import UpdatedRegisteredCourse from "../pages/students/courses/UpdatedRegisteredCourse";
import AdminAuthLayout from "../layout/admin/AdminAuthLayout";
import AdminAuth from "../pages/admin/auth";
import AdminForgotPassword from "../pages/admin/auth/forgot-password";
import EmailVerify from "../pages/admin/auth/forgot-password/EmailVerify";
import SetPassword from "../pages/admin/auth/SetPassword";
import ResetPasswordSuccess from "../pages/admin/auth/ResetPasswordSuccess";
import AdminDashboardLayout from "../layout/admin/AdminDashboardLayout";
import Dashboard from "../pages/admin/dashboard";
import Institution from "../pages/admin/institution";
import Department from "../pages/admin/department";
import AllInstitutions from "../pages/admin/institution/AllInstitutions";
import University from "../pages/admin/institution/University";
import Polytechnic from "../pages/admin/institution/Polytechnic";
import CollegeOfEducation from "../pages/admin/institution/CollegeOfEducation";
import Departments from "../pages/admin/department/Departments";
import Settings from "../pages/admin/settings";
import Program from "../pages/admin/programs";
import ProgramsList from "../pages/admin/programs/ProgramsList";
import ManageCourse from "../pages/admin/manage-course";
import ManageInstitutions from "../pages/admin/manage-course/ManageInstitutions";
import ClassManagement from "../pages/admin/class-management";
import ScheduledClasses from "../pages/admin/class-management/ScheduledClasses";
import ClassAnnouncements from "../pages/admin/class-management/ClassAnnouncements";
import { AdminProtectedRoute, AdminRedirectRoute } from "./AdminProtectedRoutes";
import Faculties from "../pages/admin/faculty/Faculties";
import Faculty from "../pages/admin/faculty/Faculty";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<AdminRedirectRoute />}>
          <Route path="admin/auth" element={<AdminAuthLayout />}>
            <Route path="" element={<AdminAuth />} />
            <Route path="forgot-password" element={<AdminForgotPassword />} />
            <Route
              path="forgot-password/verify-email"
              element={<EmailVerify />}
            />
            <Route path="set-new-password" element={<SetPassword />} />
            <Route
              path="reset-password-success"
              element={<ResetPasswordSuccess />}
            />
          </Route>
        </Route>
        <Route element={<AdminProtectedRoute />}>
          <Route path="admin/" element={<AdminDashboardLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="institution" element={<Institution />}>
              <Route index element={<AllInstitutions />} />
              <Route path="university" element={<University />} />
              <Route path="polytechnic" element={<Polytechnic />} />
              <Route
                path="college-of-education"
                element={<CollegeOfEducation />}
              />
            </Route>
            <Route path="faculty" element={<Faculty />}>
              <Route index element={<Faculties />} />
            </Route>
            <Route path="department" element={<Department />}>
              <Route index element={<Departments />} />
            </Route>
            <Route path="program" element={<Program />}>
              <Route index element={<ProgramsList />} />
            </Route>
            <Route path="manage-course" element={<ManageCourse />}>
              <Route index element={<ManageInstitutions />} />
            </Route>
            <Route path="class-management" element={<ClassManagement />}>
              <Route index element={<ScheduledClasses />} />
              <Route path="announcements" element={<ClassAnnouncements />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route element={<OnboardingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/customize-class" element={<CustomizeClass />} />
          <Route path="/add-courses" element={<AddRegisteredCourses />} />
        </Route>
        <Route element={<MainPageLayout />}>
          <Route element={<MainPage />}>
            <Route path="classes" element={<ClassesPage />} />
            <Route path="exams" element={<ExamsPage />} />
          </Route>
          <Route path="announcements" element={<AnnouncementPage />} />
          <Route path="live-classes" element={<LiveClasses />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
          <Route path="/update-program" element={<ChangeProgram />} />
          <Route path="/update-courses" element={<UpdatedRegisteredCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
