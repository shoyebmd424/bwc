import { useState } from "react";
import WorkInterface from "../WorkInterface";

const Service = () => {
  const [workType, setWorkType] = useState([]);
  const [options, setOptions] = useState(WorkOption);
  const handleSelect = (val) => {
    if (workType.find((v) => v.id === val.id)) {
      setWorkType(workType.filter((x) => x.id !== val.id));
      setOptions([...options, val]);
    } else {
      setWorkType([...workType, val]);
      setOptions(options.filter((x) => x.id !== val.id));
    }
  };
  return (
    <>
      <div className="form-field">
        <select name="" className="form-control" id="">
          <option value="">Select the type of work</option>
          <option value="">Select the type of work</option>
          <option value="">Select the type of work</option>
          <option value="">Select the type of work</option>
          <option value="">Select the type of work</option>
        </select>
      </div>
      <h3 className="fw-bold my-4">Bathroom Fitting</h3>
      <div className="work-img">
        <img
          src="/public/images/blog/blog-1.jpg"
          className="w-100 h-100"
          alt="work pic"
        />
      </div>
      {/* selected field */}
      <div className="d-flex mt-4 py-2 flex-column gap-4 selected">
        {workType.map((val, i) => (
          <div key={i}>
            <WorkInterface
              val={val}
              selected={workType.find((v) => v.id === val.id)}
              handleSelect={handleSelect}
            />
          </div>
        ))}
      </div>
      <hr className="my-5" />
      {/* options */}
      <div className="d-flex flex-column gap-4 selected">
        {options.map((val, i) => (
          <div key={i}>
            <WorkInterface
              val={val}
              selected={workType.find((v) => v.id === val.id)}
              handleSelect={handleSelect}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;

const WorkOption = [
  {
    id: 1,
    title: "Bathroom Maintenance",
    desc: "Secure the services of our professional handyman at a competitive rate",
    img: "/images/blog/author-md-1.png",
  },
  {
    id: 2,
    title: "Bathroom Maintenance",
    desc: "Secure the services of our professional handyman at a competitive rate",
    img: "/images/blog/author-md-1.png",
  },
  {
    id: 3,
    title: "Bathroom Maintenance",
    desc: "Secure the services of our professional handyman at a competitive rate",
    img: "/images/blog/author-md-1.png",
  },
  {
    id: 4,
    title: "Bathroom Maintenance",
    desc: "Secure the services of our professional handyman at a competitive rate",
    img: "/images/blog/author-md-1.png",
  },
  {
    id: 5,
    title: "Bathroom Maintenance",
    desc: "Secure the services of our professional handyman at a competitive rate",
    img: "/images/blog/author-md-1.png",
  },
];
