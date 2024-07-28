import Prps from "prop-types";
const WorkInterface = ({ val, selected, handleSelect }) => {
  return (
    <div className="d-flex gap-2 work-interface">
      <div className="select-pic">
        <img src={val?.img} alt="select pic" className="w-100 h-100" />
      </div>
      <div className={`${selected && "active"} d-flex  flex-column  pe-4`}>
        <h3>{val?.title}</h3>
        <p className="my-0 py-0 ">{val?.desc}</p>
        <div className="d-flex selectRemovebtns">
          {selected ? (
            <button
              onClick={() => handleSelect(val)}
              className="ud-btn btn-thm "
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleSelect(val)}
              className="ud-btn btn-thm "
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkInterface;
WorkInterface.propTypes = {
  selected: Prps.bool,
  handleSelect: Prps.func.isRequired,
  val: Prps.object,
};
