import { useState } from "react";
import Roles from "../become-seller/BecomeDashbord/Roles";

const OtherDetails = () => {
  const [commence, setCommence] = useState([]);
  const [budget, setBudget] = useState([]);
  const handleCommence = (val) => {
    if (commence.includes(val)) {
      setCommence(commence.filter((x) => x !== val));
    } else {
      setCommence([...commence, val]);
    }
  };
  const handleBudget = (val) => {
    if (budget.includes(val)) {
      setBudget(budget.filter((x) => x !== val));
    } else {
      setBudget([...budget, val]);
    }
  };
  return (
    <div className="right-servic">
      <Roles
        handleChangeRoles={handleCommence}
        label="When would you like the work to commence?"
        roles={commence}
        rolesOptions={option}
      />
      <Roles
        handleChangeRoles={handleBudget}
        label="Select the right level of budget for this work?"
        roles={budget}
        rolesOptions={budgetOption}
      />
      <div className="d-flex flex-column gap-3">
        <label htmlFor="" className="fw-bold mt-2">
          Preferred Payment Method
        </label>
        <input
          type="text"
          className="form-control py-0"
          placeholder="Payment via cash"
        />
        <input
          type="text"
          className="form-control py-0"
          placeholder="Payment via bank transfer "
        />
        <input
          type="text"
          className="form-control py-0"
          placeholder="Payment via BWC’s escrow service"
        />
        <input
          type="text"
          className="form-control py-0"
          placeholder="I’m flexible"
        />
        <label htmlFor="" className="fw-bold">
          Enter your location
        </label>
        <div className="d-flex">
          <input
            type="text "
            className="form-control py-0 rounded-end-0"
            placeholder="M5 3SQ"
          />
          <input
            type="text "
            className="form-control py-0 rounded-start-0"
            placeholder="Manchester"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
const option = ["As soon as possible", "Specific date", "Flexible"];
const budgetOption = [
  "£50-£1,000",
  "£1,000 - £5,000",
  "£5,000 +",
  "Prefer not to say",
];
