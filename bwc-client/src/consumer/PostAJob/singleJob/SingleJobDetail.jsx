import { useState } from "react";
import "../PostJob.css";
import Profile from "./components/Profile";
import ReviewComment from "@/components/dashboard/element/ReviewComment";
import MessageBox from "@/components/dashboard/element/MessageBox";
const SingleJobDetail = () => {
  const [comp, setCmp] = useState("profile");
  return (
    <div>
      <div className="job-header d-flex justify-content-between rounded bg-light p-2 align-items-center">
        <div className="d-flex gap-1 align-items-center fw-bold">
          <i className="fa flaticon-calendar" aria-hidden="true"></i>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="d-flex gap-1 align-items-center fw-bold">
          <i className="flaticon-place" aria-hidden="true"></i>
          <span>Manchester</span>
        </div>
        <div className="d-flex gap-1 align-items-center fw-bold">
          <i className="bi bi-person"></i>
          <span>0 Responses</span>
        </div>
      </div>

      <div className="d-flex justify-content-between my-4">
        <h4 className="fw-bold">Job Summary for Installing Kitchen</h4>{" "}
        <span className="bg-light p-2 px-3 rounded">
          <i className="fa fa-trash" aria-hidden="true"></i>
        </span>
      </div>
      <div className="my-4 d-flex justify-content-between">
        <label htmlFor="" className="fw-bold">
          Job Summary | Edit | Delete{" "}
        </label>
        <span className="bg-light-danger p-1 fw-semibold rounded-5 px-4">
          Bid Request
        </span>
      </div>
      <div className="job-trade-profile d-flex justify-content-between p-3 rounded border">
        <div className="jop-trade-pic">
          <img
            src="/images/home/home-2.jpg"
            alt=""
            className="h-100 rounded-circle w-100"
          />
        </div>
        <label htmlFor="" className="fw-bold">
          Plumbing North Limited
        </label>
        <div className="riview">
          <i className="text-warning fa fa-star"></i>{" "}
          <span className="text-dark fw-bold">4.9</span>
          <span>(459 reviews)</span>
        </div>
        <div className="job-btn d-flex gap-3 align-items-center">
          <button className="text-green btn fw-bold border text-decoration-underline">
            Shortlist Now
          </button>
          <button className="text-green btn fw-bold border text-decoration-underline">
            Reject Now
          </button>
        </div>
      </div>
      <div className="nested-cmpt border my-4 rounded-4 p-3">
        <ul className="cmpt d-flex gap-3  " style={{ listStyle: "none" }}>
          <li
            onClick={() => setCmp("profile")}
            className={comp === "profile" && "active"}
          >
            Profile
          </li>
          <li
            onClick={() => setCmp("reviews")}
            className={comp === "reviews" && "active"}
          >
            Reviews
          </li>
          <li
            onClick={() => setCmp("messages")}
            className={comp === "messages" && "active"}
          >
            Messages
          </li>
        </ul>
        {/* components */}
        <div className="p-3">
          {comp === "profile" && <Profile />}
          {comp === "reviews" && <ReviewComment />}
          {comp === "messages" && <MessageBox />}
        </div>
      </div>
    </div>
  );
};

export default SingleJobDetail;
