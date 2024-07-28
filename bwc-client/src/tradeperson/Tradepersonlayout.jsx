import MetaComponent from "@/components/common/MetaComponent";
import DashboardFooter from "@/components/dashboard/footer/DashboardFooter";
import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import MobileNavigation2 from "@/components/header/MobileNavigation2";
import { metadata } from "@/consumer/dashboard";
import toggleStore from "@/store/toggleStore";
import { Outlet } from "react-router-dom";

const Tradepersonlayout = () => {
  const isActive = toggleStore((state) => state.isDasboardSidebarActive);

  return (
    <>
      <MetaComponent meta={metadata} />
      <MobileNavigation2 />
      <DashboardHeader />
      <div className="dashboard_content_wrapper">
        <div
          className={`dashboard dashboard_wrapper pr30 mt-0 pr0-xl ${
            isActive ? "dsh_board_sidebar_hidden" : ""
          }`}
        >
          <DashboardSidebar data={sidebarData} role="tradeperson" />
          <div className="dashboard__main pl0-md bg-light mt-0 ms-4">
            <Outlet />
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tradepersonlayout;

const sidebarData = [
  {
    id: 1,
    name: "Dashboard",
    icon: "flaticon-home",
    path: "/tradeperson",
  },
  {
    id: 2,
    name: "Schedule",
    icon: "bi bi-clock",
    path: "/tradeperson/schedule",
  },
  {
    id: 3,
    name: "Requests",
    icon: "flaticon-mail",
    path: "/tradeperson/requests",
  },
  {
    id: 4,
    name: "Quetations",
    icon: "flaticon-dollar",
    path: "/tradeperson/quetation",
  },
  {
    id: 5,
    name: "jobs",
    icon: "flaticon-document",
    path: "/tradeperson/job",
  },
  {
    id: 6,
    name: "invoice",
    icon: "flaticon-receipt",
    path: "/tradeperson/invoice",
  },
  {
    id: 7,
    name: "payout",
    icon: " flaticon-withdraw",
    path: "/tradeperson/payout",
  },
  {
    id: 8,
    name: "Suppliers",
    icon: "bi bi-box2",
    path: "/tradeperson/supplier",
  },
  {
    id: 9,
    name: "Home Inspirations",
    icon: "bi bi-lightbulb",
    path: "/tradeperson/home-inspiration",
  },
  {
    id: 10,
    name: "My Profile",
    icon: "flaticon-photo",
    path: "/tradeperson/my-profile",
  },
  {
    id: 11,
    name: "Manage Services",
    icon: "flaticon-photo",
    path: "/tradeperson/services",
  },
  {
    id: 12,
    name: "Logout",
    icon: "flaticon-logout",
    path: "/tradeperson/login",
  },
];
