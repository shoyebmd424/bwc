import { useState } from "react";
import img from "../../../asserts/home/images.png";
const Description = () => {
  const [isPic, setIsPic] = useState("");
  return (
    <div className="description-pic d-flex flex-column gap-3">
      <div>
        <label htmlFor="" className="fw-bold">
          Please provide description of the job.
        </label>
        <textarea name="" id="" rows={4} className="form-control"></textarea>
      </div>
      <div>
        <label htmlFor="" className="fw-bold">
          {" "}
          Would you like to upload any photos?
        </label>
        <div
          onClick={() => setIsPic("yes")}
          className={`d-flex justify-content-between ${
            isPic === "yes" && "active"
          } select-field`}
        >
          <span>Yes</span> <span className="empty "></span>
        </div>
      </div>
      {isPic === "yes" && (
        <>
          <div>
            <label
              style={{ zIndex: "4" }}
              htmlFor="pics"
              className="select-field d-flex gap-3 position-relative"
            >
              <span>
                <i className="fa fa-upload"></i>
              </span>{" "}
              <span>click and upload photos </span>
              <input
                type="file"
                id="pics"
                multiple
                style={{ zIndex: "-2", opacity: "0" }}
                className="position-absolute border-0"
              />
            </label>
          </div>
          <div className="d-flex gap-3">
            <div className="pic">
              <img src={img} alt="" />
            </div>
            <div className="pic">
              <img src={img} alt="" />
            </div>
            <div className="pic">
              <img src={img} alt="" />
            </div>
            <div className="pic">
              <img src={img} alt="" />
            </div>
          </div>
        </>
      )}
      <div
        onClick={() => setIsPic("no")}
        className={`d-flex justify-content-between select-field ${
          isPic === "no" && "active"
        }`}
      >
        <span>No,May Be Later</span> <span className="empty"></span>
      </div>
      <div>
        <label htmlFor="" className="fw-bold">
          Give your job a headline{" "}
        </label>
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};

export default Description;
