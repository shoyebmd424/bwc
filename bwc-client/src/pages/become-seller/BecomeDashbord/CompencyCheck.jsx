import PropTypes from "prop-types";

const CompencyCheck = ({ compencyCheck, setCompencyCheck }) => {
  const handleAdd = () => {
    setCompencyCheck([...compencyCheck, ""]);
  };

  const handleRemove = (index) => {
    const newCompencyCheck = compencyCheck.filter((_, i) => i !== index);
    setCompencyCheck(newCompencyCheck);
  };

  const handleChange = (index, value) => {
    const newCompencyCheck = [...compencyCheck];
    newCompencyCheck[index] = value;
    setCompencyCheck(newCompencyCheck);
  };

  return (
    <div>
      {compencyCheck?.map((val, i) => (
        <div key={i} className="mb20 d-flex">
          <input
            type="text"
            className="form-control py-0"
            style={{ height: "35px" }}
            placeholder="e.g. RICS chartership"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
          />
          {i !== 0 && (
            <button className="btn" onClick={() => handleRemove(i)}>
              <i className="fa fa-trash"></i>{" "}
            </button>
          )}
        </div>
      ))}
      <a
        className="btn text-primary text-decoration-underline"
        onClick={handleAdd}
      >
        Add more +
      </a>
    </div>
  );
};

CompencyCheck.propTypes = {
  compencyCheck: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCompencyCheck: PropTypes.func.isRequired,
};

export default CompencyCheck;
