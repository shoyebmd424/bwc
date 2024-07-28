import { Link } from "react-router-dom";

const Requests = () => {
  return (
    <div className="requests col-11 ms-auto h-100 d-flex  flex-column gap-5">
      <div className="bid-requests d-flex flex-column border ">
        <button className="bid-request-btn my-3">Bid Requests</button>
        <div className="my-4 text-center">
          Contractors who are interested in your job
        </div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="requests  border px-2  py-2 d-flex gap-3 ">
            <div className="prf my-auto">
              <img
                src="/images/blog/blog-1.jpg"
                alt=""
                className="h-100 w-100 rounded-circle"
              />
            </div>
            <div className="d-flex justify-content-between flex-column">
              <small className="fw-bold">Plumbing North Limited</small>
              <div>
                <i className="fa fa-star text-warning"></i>{" "}
                <span>4.9 (345 reviews)</span>
              </div>
            </div>
            <div className="d-flex align-items-center mx-auto">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
      <div className="bid-requests d-flex flex-column border ">
        <button className="bid-request-btn my-3">Shortlisted</button>
        <div className="my-4 text-center">
          There are no contractors shortlisted at the moment.
        </div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="requests  border px-2  py-2 d-flex gap-3 ">
            <div className="prf my-auto">
              <img
                src="/images/blog/blog-1.jpg"
                alt=""
                className="h-100 w-100 rounded-circle"
              />
            </div>
            <div className="d-flex justify-content-between flex-column">
              <small className="fw-bold">Plumbing North Limited</small>
              <div>
                <i className="fa fa-star text-warning"></i>{" "}
                <span>4.9 (345 reviews)</span>
              </div>
            </div>
            <div className="d-flex align-items-center mx-auto">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        ))}
        <button className="btn btn-light border-0  mt-3 py-3 text-primary text-decoration-underline">
          Discover and invite contractors
        </button>
      </div>
      <div className="bid-requests d-flex flex-column border">
        <button className="bid-request-btn my-3">Rejections</button>
        <div className="my-4 text-center">
          There are no contractors shortlisted at the moment.
        </div>
        <Link
          to="/consumer/tradepersons"
          className="btn btn-light border-0 mt-auto mt-3 py-3 text-primary text-decoration-underline"
        >
          Discover and invite contractors
        </Link>
      </div>
    </div>
  );
};

export default Requests;
