import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";
import { Link } from "react-router-dom";

const JobCom = () => {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="d-flex gap-3">
              <div className="dashboard_title_area">
                <h2>My Jobs</h2>
              </div>
              <div className="my-jobs-boxes d-flex gap-3 mx-auto">
                <div className="box-job pe-5 p-3 bg-white border rounded ">
                  <h4 className="fw-bold my-0">Total Jobs</h4>
                  <small>past 30 days</small>
                  <h2>5</h2>
                </div>
                <div className="box-job pe-5 p-3 bg-white border rounded">
                  <h4 className="fw-bold my-0">Hired</h4>
                  <small>past 30 days</small>
                  <h2>4</h2>
                </div>
              </div>
            </div>
            <div className="job-field my-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="job-head bg-white p-3 rounded border my-4 d-flex justify-content-between"
                >
                  <div className="d-flex justify-content-between flex-column gap-3">
                    <h4 className="fw-bold">
                      <Link className="" to={`/consumer/job/${i}`}>
                        {" "}
                        Bathroom Installation{" "}
                      </Link>
                    </h4>{" "}
                    Posted 20mins ago
                  </div>
                  <div className="midd d-flex justify-content-between gap-3">
                    <div className="d-flex flex-column justify-content-between">
                      <button className="btn  py-2  p-4 border bg-white text-decoration-underline fw-bold text-green">
                        0 Intereseted
                      </button>
                      <label htmlFor="" className="text-center">
                        Bid Requests
                      </label>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                      <button className="btn py-2 p-4 border bg-white text-decoration-underline fw-bold text-green">
                        0 Shortlisted
                      </button>
                      <label htmlFor="" className="text-center">
                        Referral Processed
                      </label>
                    </div>
                  </div>
                  <div className="job-head-right d-flex justify-content-between flex-column gap-3">
                    <a
                      href="http://"
                      className="text-decoration-underline fw-bold text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send Invite
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCom;
