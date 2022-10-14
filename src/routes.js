/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import ManagerBranch from "views/Branch/ManagerBranch.js";
import ManagerRoom from "views/Room/ManagerRoom.js";
import ManagerStudent from "views/Student/ManagerStudent.js";
import RegisterSubject from "views/Subject/RegisterSubject.js";
import ManagerTeacher from "views/Teacher/ManagerTeacher.js";
import FormStudent from "views/Student/FormStudent.js";
import FormTeacher from "views/Teacher/FormTeacher.js";
import FormBranch from "views/Branch/FormBranch.js";
import FormRoom from "views/Room/FormRoom.js";
import ManagerUser from "views/Users/ManagerUser.js";
import FormUser from "views/Users/FormUser.js";
import FormInforUser from "views/Users/FormInforUser.js";
import FormStudentDetails from "views/Student/FormStudentDetails.js";

import Login from "views/Login.js";
import Register from "views/Register.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/manager-branch",
    name: "Quản lý khoa",
    icon: "nc-icon nc-grid-45",
    component: ManagerBranch,
    layout: "/admin",
  },
  {
    path: "/manager-class",
    name: "Quản lý lớp học",
    icon: "nc-icon bi bi-windows",
    component: ManagerRoom,
    layout: "/admin",
  },
  {
    path: "/manager-user",
    name: "Quản lý thành viên",
    icon: "nc-icon bi bi-people",
    component: ManagerUser,
    layout: "/admin",
  },
  {
    path: "/manager-student",
    name: "Quản lý sinh viên",
    icon: "nc-icon bi bi-people",
    component: ManagerStudent,
    layout: "/admin",
  },
  {
    path: "/manager-teacher",
    name: "Quản lý giáo viên",
    icon: "nc-icon bi bi-people-fill",
    component: ManagerTeacher,
    layout: "/admin",
  },
  {
    path: "/register-subject",
    name: "Đăng ký môn học",
    icon: "nc-icon nc-notes",
    component: RegisterSubject,
    layout: "/admin",
  },
  {
    path: "/add-user",
    name: "Thêm mới thành viên",
    icon: "nc-icon",
    component: FormUser,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/edit-user/:id",
    name: "Cập nhật thành viên",
    icon: "nc-icon",
    component: FormUser,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/infor-user/:id",
    name: "Thông tin thành viên",
    icon: "nc-icon",
    component: FormInforUser,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/add-student",
    name: "Thêm mới sinh viên",
    icon: "nc-icon",
    component: FormStudent,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/edit-student/:id",
    name: "Cập nhật sinh viên",
    icon: "nc-icon",
    component: FormStudent,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/add-teacher",
    name: "Thêm mới giáo viên",
    icon: "nc-icon",
    component: FormTeacher,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/edit-teacher/:id",
    name: "Cập nhật giáo viên",
    icon: "nc-icon",
    component: FormTeacher,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/add-branch",
    name: "Thêm mới khoa",
    icon: "nc-icon",
    component: FormBranch,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/edit-branch/:id",
    name: "Cập nhật khoa",
    icon: "nc-icon",
    component: FormBranch,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/add-room",
    name: "Thêm mới lớp học",
    icon: "nc-icon",
    component: FormRoom,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/edit-room/:id",
    name: "Cập nhật lớp",
    icon: "nc-icon",
    component: FormRoom,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/student-details",
    name: "Thông tin chi tiết sinh viên",
    icon: "nc-icon",
    component: FormStudentDetails,
    layout: "/admin",
    disable: true,
  },
  {
    path: "/login",
    name: "Đăng nhập",
    icon: "nc-icon",
    component: Login,
    layout: "/admin",
    // disable: true,
  },
  {
    path: "/register",
    name: "Đăng ký",
    icon: "nc-icon",
    component: Register,
    layout: "/admin",
    // disable: true,
  },
];

export default dashboardRoutes;
