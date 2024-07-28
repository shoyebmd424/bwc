import { dasboardNavigation } from "@/data/dashboard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DashboardSidebar({ data, role }) {
  const { pathname } = useLocation();
  const [sideData, setData] = useState(dasboardNavigation);
  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  return (
    <>
      <div
        className={`dashboard__sidebar d-none ${
          role === "tradeperson" && "pt-0 mt-0"
        } d-lg-block`}
      >
        <div className="dashboard_sidebar_list">
          <p className="fz15 fw400 ff-heading pl30">Start</p>
          {sideData.slice(0, role === "tradeperson" ? 7 : 4).map((item, i) => (
            <div key={i} className="sidebar_list_item mb-1">
              <Link
                to={item.path}
                className={`items-center ${
                  pathname === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} aria-hidden="true" />
                {item.name}
              </Link>
            </div>
          ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Marketplace</p>

          {sideData
            .slice(
              role === "tradeperson" ? 7 : 4,
              role === "tradeperson" ? 9 : 6
            )
            .map((item, i) => (
              <div key={i} className="sidebar_list_item mb-1">
                <Link
                  to={item.path}
                  className={`items-center ${
                    pathname === item.path ? "-is-active" : ""
                  }`}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.name}
                </Link>
              </div>
            ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
          {sideData
            .slice(
              role === "tradeperson" ? 9 : 6,
              role === "tradeperson" ? sideData.length : 8
            )
            .map((item, i) => (
              <div key={i} className="sidebar_list_item mb-1">
                <Link
                  to={item.path}
                  className={`items-center ${
                    pathname === item.path ? "-is-active" : ""
                  }`}
                >
                  <i className={`${item.icon} mr15`} />
                  {item.name}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
