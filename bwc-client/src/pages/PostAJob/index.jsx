import { useState } from "react";
import "./PostJob.css";
import BookingDetails from "./BookingDetails";
import Service from "./components/Service";
import OtherDetails from "./OtherDetails";
import Description from "./components/Description";
import Summary, { BudgetSummry } from "./components/Summary";

const PostAJob = () => {
  const [step, setSteps] = useState(0);

  const components = [
    { cmp: <Service /> },
    { cmp: <OtherDetails /> },
    { cmp: <Description /> },
    { cmp: <Summary /> },
  ];
  return (
    <div className="post-a-job row w-100 pt-0">
      <div className="row col-lg-10 ms-auto">
        <h4 className="fw-bold d-flex gap-3 my-3">
          <i
            onClick={() => setSteps(step > 0 ? step - 1 : 0)}
            className="fa fa-arrow-left"
            style={{ cursor: "pointer" }}
          ></i>
          <span>Step 1 Of 3</span>
        </h4>
        <h3 className="fw-bold"> Service Details</h3>
        <div className="col-md-6 service-details-left my-4 d-flex flex-column">
          {/* select field */}
          {components[step] && components[step]?.cmp}
          <div className="nextBtn mt-auto  py-3 mb-5 text-center">
            <button
              type="button"
              onClick={() => setSteps(step + 1)}
              className="ud-btn btn-thm py-2 w-50 mx-auto rounded-5"
            >
              Next
            </button>
          </div>
        </div>
        <div className="col-md-6 h-100 ">
          <div className="col-9 mx-auto h-100">
            {step === 3 ? <BudgetSummry /> : <BookingDetails />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
