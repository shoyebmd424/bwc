import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import useStickyMenu from "@/hook/useStickyMenu";
import MobileNavigation1 from "./MobileNavigation1";
import logo from "../../asserts/home/Logo-white.png";
import logo2 from "../../asserts/home/Logo.png";

export default function Header1() {
  const sticky = useStickyMenu(50);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style stricky main-menu animated   ${
          sticky ? "slideInDown stricky-fixed" : "slideIn"
        }`}
      >
        <nav className="posr">
          <div className="container-fluid posr menu_bdrt1 px30">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos br-white-light pr30 pr5-xl">
                    <Link className="header-logo logo1" to="/">
                      <img
                        // src="/images/header-logo.svg"
                        src={logo}
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" to="/">
                      <img src={logo2} alt="Header Logo" />
                    </Link>
                  </div>
                  {/* <div className="home1_style">
                    <Mega />
                  </div> */}
                  <Navigation />
                </div>
              </div>
              <div className="col-auto px-0">
                <div className="d-flex align-items-center">
                  {/* <a
                    className="login-info bdrl1 pl15-lg pl30"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a> */}
                  <Link
                    className={`login-info mx15-lg mx30`}
                    to="/become-seller"
                  >
                    <span className="d-none d-xl-inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link className={`login-info mr15-lg mr30`} to="/login">
                    Sign in
                  </Link>
                  <Link className="ud-btn btn-white add-joining" to="/register">
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation1 />
    </>
  );
}
