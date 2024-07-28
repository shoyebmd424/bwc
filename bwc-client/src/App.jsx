import Header1 from "@/components/header/Header1";

import "./globals.css";
// import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import BottomToTop from "@/components/button/BottomToTop";
import SearchModal1 from "@/components/modal/SearchModal1";
import { useLocation } from "react-router-dom";

import { header1, header5, sidebarEnable } from "@/data/header";
import Header5 from "@/components/header/Header5";
import Footer2 from "@/components/footer/Footer2";

import toggleStore from "@/store/toggleStore";
import { footer } from "@/data/footer";
import "react-tooltip/dist/react-tooltip.css";
import NavSidebar from "@/components/sidebar/NavSidebar";
import WOW from "wow.js";

import Routes from "./Routes";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
if (typeof window !== "undefined") {
  import("bootstrap");
}

function App() {
  const isListingActive = toggleStore((state) => state.isListingActive);

  const { pathname } = useLocation();
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, [pathname]);

  return (
    <div
      className={` ${
        pathname === "/register" || pathname === "/login"
          ? "bgc-thm4 mm-wrapper mm-wrapper--position-left-front"
          : sidebarEnable.includes(pathname)
          ? isListingActive
            ? "menu-hidden-sidebar-content"
            : ""
          : ""
      }`}
    >
      {!footer.includes(pathname) ? (
        <div className="wrapper ovh mm-page mm-slideout">
          {header1.find(
            (elm) => elm?.split("/")[1] == pathname?.split("/")[1]
          ) && <Header1 />}

          {(header5.find(
            (elm) => elm?.split("/")[1] == pathname?.split("/")[1]
          ) ||
            !pathname?.split("/").includes("consumer" || "tradeperson")) && (
            <Header5 />
          )}

          <SearchModal1 />

          <div className="body_content">
            {/* {children} */}
            <Routes />
            {/* footer */}

            {!pathname?.split("/").includes("tradeperson") &&
              !pathname?.split("/").includes("consumer") && <Footer2 />}

            {/* bottom to top */}
            <BottomToTop />
          </div>
        </div>
      ) : (
        <div className="wrapper mm-page mm-slideout">
          <Routes />
          {/* {children} */}
          {/* bottom to top */}
          <BottomToTop />
        </div>
      )}

      {/* sidebar mobile navigation */}
      <NavSidebar />
      <ScrollTopBehaviour />
    </div>
  );
}

export default App;
