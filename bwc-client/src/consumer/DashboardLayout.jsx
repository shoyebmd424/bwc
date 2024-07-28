import toggleStore from "@/store/toggleStore";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import DashboardSidebar from "../components/dashboard/sidebar/DashboardSidebar";
import DashboardFooter from "../components/dashboard/footer/DashboardFooter";
import { Outlet } from "react-router-dom";
import MobileNavigation2 from "../components/header/MobileNavigation2";
import MetaComponent from "../components/common/MetaComponent";
import { metadata } from "@/consumer/dashboard";

export default function DashboardLayout() {
  const isActive = toggleStore((state) => state.isDasboardSidebarActive);

  return (
    <>
      <MetaComponent meta={metadata} />
      <MobileNavigation2 />
      <DashboardHeader />
      <div className="dashboard_content_wrapper">
        <div
          className={`dashboard dashboard_wrapper pr30 pr0-xl ${
            isActive ? "dsh_board_sidebar_hidden" : ""
          }`}
        >
          <DashboardSidebar data={sidebarData} />
          <div className="dashboard__main pl0-md">
            <Outlet />
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
}

const sidebarData = [
  {
    id: 1,
    name: "Dashboard",
    icon: "flaticon-home",
    path: "/consumer",
  },
  {
    id: 2,
    name: "Schedule",
    icon: "bi bi-clock",
    path: "/consumer/schedule",
  },
  {
    id: 3,
    name: "Post a job",
    icon: "flaticon-document",
    path: "/consumer/post-a-job",
  },
  {
    id: 4,
    name: "My Jobs",
    icon: "flaticon-receipt ",
    path: "/consumer/job",
  },
  {
    id: 5,
    name: "Suppliers",
    icon: "bi bi-box2",
    path: "/supplier",
  },
  {
    id: 6,
    name: "Home Inspirations",
    icon: "bi bi-lightbulb",
    path: "/home-inspiration",
  },
  {
    id: 14,
    name: "My Profile",
    icon: "flaticon-photo",
    path: "/consumer/my-profile",
  },
  {
    id: 15,
    name: "Logout",
    icon: "flaticon-logout",
    path: "/login",
  },
];
