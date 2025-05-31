import { IoDocumentTextOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { TbHome, TbUser, TbBuilding, TbPencil, TbBell } from "react-icons/tb";
import { LuLayoutDashboard, LuGraduationCap } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsPersonGear } from "react-icons/bs";

export const NAV_iTEMS = [
  {
    name: "home",
    icon: TbHome,
    link: "../classes",
  },
  {
    name: "Announcements",
    icon: IoDocumentTextOutline,
    link: "announcements",
  },
  {
    name: "live-classes",
    icon: RiLiveLine,
    link: "live-classes",
  },
  {
    name: "profile",
    icon: TbUser,
    link: "profile",
  },
];

export const ADMIN_NAV_ITEMS = [
  {
    name: "Dashboard",
    icon: LuLayoutDashboard ,
    link: "",
  },
  {
    name: "Institution",
    icon: FaSchool,
    link: "institution",
  },
  {
    name: "Department",
    icon: TbBuilding,
    link: "department",
  },
  {
    name: "Program",
    icon: LuGraduationCap,
    link: "program",
  },
  {
    name: "Manage Course",
    icon: TbPencil,
    link: "manage-course",
  },
  {
    name: "Class Management",
    icon: LiaChalkboardTeacherSolid,
    link: "class-management",
  },
  {
    name: "Alert & Notifications",
    icon: TbBell,
    link: "alerts-and-notifications",
  },
  {
    name: "Student (User)",
    icon: TbUser,
    link: "student",
  },
  {
    name: "Admin Tools",
    icon: BsPersonGear,
    link: "tools",
  },
];
