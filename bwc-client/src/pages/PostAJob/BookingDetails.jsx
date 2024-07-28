const BookingDetails = () => {
  return (
    <div className="h-100 d-flex flex-column gap-4">
      <div className="right-service h-50 d-flex flex-column gap-4">
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

      <div className="budget-summery right-service d-flex gap-4 flex-column ">
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
    </div>
  );
};

export default BookingDetails;
