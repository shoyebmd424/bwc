const Summary = () => {
  return (
    <div>
      <div className=" d-flex flex-column gap-4">
        <h3 className="fw-bold ">Booking Details</h3>
        <div className="d-flex flex-column gap-4">
          <div>
            <span className="fw-semibold">Title</span>
          </div>
          <div>
            <span className="fw-semibold">Service</span>
          </div>
          <div>
            <span className=" fw-semibold">Service Details</span>
          </div>
          <div>
            <span className=" fw-semibold">Description</span>
          </div>
        </div>
        <div className="mt-auto d-flex flex-column gap-4">
          <div>
            <span className="text-muted fw-semibold">Timeline</span>
          </div>
          <div>
            <span className="text-muted fw-semibold"> Area</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

export const BudgetSummry = () => {
  return (
    <>
      <div className="`budget-summery right-service d-flex gap-4 flex-column ">
        <div className="">
          <span className="fw-semibold">Title</span>
        </div>
        <div>
          <span className="fw-semibold">Procurement</span>
        </div>
        <div>
          <span className="fw-semibold">Payment Method</span>
        </div>
      </div>
      <div className="d-flex gap-3 flex-wrap py-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="summary-img">
            <img
              src="/public/images/shop/cart-1.png"
              className="h-100 w-100"
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};
