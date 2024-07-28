import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiFileText, FiPlusCircle } from "react-icons/fi";
import { PiMapPinAreaLight } from "react-icons/pi";
import "./JobRequest.css";
import { useState } from "react";
import MessageBox from "@/components/dashboard/element/MessageBox";
import { useNavigate } from "react-router-dom";
const JobRequests = () => {
  const [comp, setComp] = useState("description");
  const navigate = useNavigate();
  return (
    <div className="job-requests">
      <div className="d-flex gap-3 p-3">
        <div>
          <h3>Job Requests</h3>
          <small>Lorem ipsum dolor sit amet.</small>
        </div>
        <div className="d-flex  flex-column bg-white rounded pe-5 p-2">
          <h5 className="fw-semibold">Leads</h5>
          <small className="text-muted">Past 30 Days</small>
          <h3 className="fw-bold">5</h3>
        </div>
        <div className="d-flex  flex-column bg-white rounded pe-5 p-2">
          <h5 className="fw-semibold">Bid Requests</h5>
          <small className="text-muted">Past 30 Days</small>
          <h3 className="fw-bold">4</h3>
        </div>
      </div>
      <div className="row">
        <div className="bg-white col-4 rounded p-4 h-100">
          <h5 className="fw-bold bg-light-blue p-2 py-3 rounded">Leads</h5>
          <div className="d-flex  flex-column gap-4 job-request-list-one">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  i === 0 && "active"
                } one-request d-flex flex-column gap-1 pb-1`}
                style={{ borderBottom: "2px solid lightgray" }}
              >
                <h4 className="fw-semibold m-0">installing kitchen</h4>
                <div className="d-flex gap-2 justify-content-between">
                  <div className="text-muted d-flex align-items-center gap-1">
                    <span>
                      <PiMapPinAreaLight size={18} />
                    </span>
                    <small>Salford | 1.5 miles</small>
                  </div>
                  <div className="text-muted d-flex align-items-center gap-1">
                    <span>
                      <IoCalendarNumberOutline size={16} />
                    </span>
                    <small>Post 20mins ago</small>
                  </div>
                  <div
                    style={{ width: "2px" }}
                    className="bg-light h-100"
                  ></div>
                  <div className="text-muted d-flex align-items-center gap-1">
                    <span>
                      <FiFileText size={16} />
                    </span>
                    <small>Plumbing</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" col-5 d-flex flex-column gap-3 h-100">
          <div className="bg-white p-3 d-flex flex-column gap-3 rounded w-100">
            <div className="d-flex gap-2 justify-content-between">
              <h5 className="fw-bold">Installing Kitchen</h5>
              <button className="bg-light-red border-0 rounded px-3 p-1 fw-bold ">
                Bid Now
              </button>
              <div className="bg-light px-2 py-1 rounded fw-semibold">
                $3+VAT
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-between">
              <small>Salford | 1.5 miles </small>
              <div className="me-4 pe-2">
                <button className="bg-light-red  border-0 rounded px-3 p-1 my-auto fw-bold">
                  Bid Now
                </button>
              </div>
              <div></div>
            </div>
            <div className="bg-light py-2 px-1 fw-semibold rounded">
              Bid Request is free. You only incur charges once shortlisted
            </div>
          </div>
          <div className="bg-white p-3 h-100 d-flex flex-column gap-3 rounded w-100">
            <div className="d-flex  request-head">
              <div
                onClick={() => setComp("description")}
                className={comp === "description" ? "active" : ""}
              >
                Description
              </div>
              <div
                onClick={() => setComp("message")}
                className={comp === "message" ? "active" : ""}
              >
                Message
              </div>
              <div
                onClick={() => setComp("quetation")}
                className={comp === "quetation" ? "active" : ""}
              >
                Quetation
              </div>
            </div>
            {comp === "description" && (
              <div className="d-flex flex-column gap-3 ">
                <div className="d-flex justify-content-between ">
                  <div className="fw-bold">Plumbing</div>
                  <div className=" text-green">
                    <FiFileText /> <span>1 Bid Requests</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="fw-bold">Installation of bathroom</div>
                  <div className=" text-green">
                    <FiFileText /> <span>1 Bid Requests</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, sit dolor quasi molestiae error beatae delectus nulla
                    quam inventore quaerat dicta rerum libero, ipsum ab
                    perspiciatis quo ullam. Velit, nemo! Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Modi est aliquam
                    explicabo consectetur magni! Quibusdam iste sed repudiandae
                    architecto deleniti!
                  </p>
                </div>
                <div className="mt-auto">
                  <span className="fw-bold"> Posted by Username</span>:{" "}
                  <span>Usman khaja</span>
                </div>
              </div>
            )}
            {comp === "message" && <MessageBox />}
            {comp === "quetation" && (
              <>
                <div
                  style={{ cursor: "pointer" }}
                  className="bg-light d-flex justify-content-between p-2 align-items-center rounded"
                  onClick={() => navigate("quetation")}
                >
                  <span className="fw-bold">Create a quotation</span>
                  <FiPlusCircle className="me-3 text-green" size={20} />
                </div>
                <button className="ud-btn btn-thm bdrs4 bdrs4-sm ">
                  Quotation submitted
                </button>
              </>
            )}
          </div>
        </div>
        <div className="col-3  h-100">
          <div className="d-flex bg-white p-3 rounded flex-column gap-3 me-3">
            <h5 className="fw-bold">Budget Summary</h5>
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Total</span>
              <span className="mx-auto">£1k-£5k</span>
            </div>
            <div className="d-flex justify-content-between ">
              <span className="fw-bold">Procurement</span>
              <span className="mx-auto">Material & Labour</span>
            </div>
          </div>
          <div className="d-flex  p-3 rounded flex-column gap-3 me-3">
            <div className="row row-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-2  ">
                  <img
                    src="/public/images/home/home-1.jpg"
                    alt=""
                    className="w-100 h-100 rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRequests;
