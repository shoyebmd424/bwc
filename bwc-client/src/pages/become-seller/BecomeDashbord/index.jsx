import { useState } from "react";
import "./BecomDash.css";
import Roles from "./Roles";
import BussinessInfomation from "./BussinessInfomation";
import IndentityCheck from "./IndentityCheck";
import CompencyCheck from "./CompencyCheck";
import AddYourPaymentMethod from "./AddYourPaymentMethod";
import CompleteWelcome from "./CompleteWelcome";
const BecomeDashboard = () => {
  const [roles, setRoles] = useState([]);
  const [entity, setEntity] = useState([]);
  const [identityt, setident] = useState([]);
  const [looking, setLooking] = useState([]);
  const [steps, setStep] = useState(1);
  const [compencyCheck, setCompencyCheck] = useState([""]);
  const handleChangeRoles = (val) => {
    if (roles.includes(val)) {
      setRoles(roles.filter((v) => v != val));
    } else {
      setRoles([...roles, val]);
    }
  };
  const handleEntity = (val) => {
    if (roles.includes(val)) {
      setEntity(roles.filter((v) => v != val));
    } else {
      setEntity([...roles, val]);
    }
  };
  const handleIdenti = (val) => {
    if (identityt.includes(val)) {
      setident(roles.filter((v) => v != val));
    } else {
      setident([...roles, val]);
    }
  };
  const handlelooking = (val) => {
    if (looking.includes(val)) {
      setLooking(roles.filter((v) => v != val));
    } else {
      setLooking([...roles, val]);
    }
  };
  return (
    <section className="pt-0 become-dash">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-6 col-md-9 mx-auto">
            <div className="d-flex flex-column default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white become-form">
              <h4 className="form-title">
                {steps !== 8 && "Step -"} {steps !== 8 && steps}{" "}
                {stepsValue[steps - 1]}
                <button
                  disabled={steps <= 1}
                  style={{ cursor: steps <= 1 && "not-allowed" }}
                  className="back-btn"
                  onClick={() => setStep(steps - 1)}
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
              </h4>
              {/* comp */}
              {steps === 1 && (
                <Roles
                  handleChangeRoles={handleChangeRoles}
                  roles={roles}
                  rolesOptions={rolesOptions}
                  label="Select the trade best suits your role (maximum of 5 trades )"
                />
              )}
              {steps === 2 && (
                <Roles
                  handleChangeRoles={handlelooking}
                  roles={looking}
                  rolesOptions={lookingOptions}
                  label="How far are you looking to travel?"
                />
              )}
              {steps === 3 && (
                <Roles
                  handleChangeRoles={handleEntity}
                  roles={entity}
                  rolesOptions={EntityOptions}
                  label="Your legal entity?"
                />
              )}
              {steps === 4 && <BussinessInfomation />}
              {steps === 5 && (
                <IndentityCheck
                  handleChangeRoles={handleIdenti}
                  roles={identityt}
                  rolesOptions={identityOption}
                />
              )}
              {steps === 6 && (
                <CompencyCheck
                  compencyCheck={compencyCheck}
                  setCompencyCheck={setCompencyCheck}
                />
              )}
              {steps === 7 && <AddYourPaymentMethod />}
              {steps === 8 && <CompleteWelcome />}

              <div className="text-center mt-auto py-4">
                <button
                  disabled={steps >= 8}
                  style={{ cursor: steps >= 8 && "not-allowed" }}
                  onClick={() => setStep(steps + 1)}
                  type="button"
                  className="ud-btn btn-thm w-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDashboard;

const rolesOptions = ["Architectural", "Bathroom fitter", "Plumber"];
const EntityOptions = [
  "Sole Trader / Self Employed",
  "Limited Liability Company",
  "Limited Liability Parnership",
  "Ordinary Partnership",
];
const lookingOptions = [
  "up to 10 miles radius",
  "10-20 miles radius",
  "20 miles + radius",
];
const identityOption = [
  "Password",
  "Driving License",
  "British Residence Permit",
  "Ordinary Partnership",
];

const stepsValue = [
  "Your Detail",
  "Looking for",
  "Entity",
  "Bussiness information",
  "Identity Check",
  "Competency Check",
  "Payment Method",
  "Completed and Welcome to BWC ecosystem!",
];
