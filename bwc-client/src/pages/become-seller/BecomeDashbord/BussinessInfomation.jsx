const BussinessInfomation = () => {
  return (
    <>
      <h5 className="text mt20 mb-2 fw-bold">Your business information</h5>
      <div className="bussiness-form">
        <div className="mb20">
          <label className="text mt20 mb-2 ">Trading Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input your trading name"
          />
        </div>
        <div className="mb20">
          <label htmlFor="">Work Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input your work address"
          />
        </div>
        <div className="mb20 my-5">
          <label htmlFor="">Postcode</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control w-auto rounded-end-0"
              placeholder="Input Postcode"
            />
            <input
              type="text"
              className="form-control rounded-start-0"
              placeholder="london"
            />
          </div>
        </div>
        <div className="mb20">
          <label htmlFor="">Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input your company name"
          />
        </div>
        <div className="mb20">
          <label htmlFor="">Company Registration No.</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input your company registration no."
          />
        </div>
      </div>
    </>
  );
};

export default BussinessInfomation;
