import SingleJobDetail from "./SingleJobDetail";
import Requests from "./Requests";

const SingleJob = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-8">
            <SingleJobDetail />
          </div>
          <div className="col-4 ms-auto">
            <Requests />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
