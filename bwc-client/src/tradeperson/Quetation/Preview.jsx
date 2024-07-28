const Preview = () => {
  return (
    <div className="m-3">
      <div className="d-flex justify-content-end my-3">
        <div className="d-flex gap-4">
          <button className=" py-1  px-4 btn-outline-green fw-bold">
            More Action
          </button>
        </div>
      </div>
      <div className="bg-white rounded p-3">
        <div className="d-flex justify-content-between">
          <h3 className="fw-bold">Quote for Client Name</h3>
          <div
            className="img-pic"
            style={{ width: "75px", aspectRatio: "1/1" }}
          >
            <img
              src="/images/blog/author-1.png"
              alt=""
              className="w-100 h-100 rounded"
            />
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="d-flex gap-1 flex-column">
            <span className="fw-bold">Address</span>
            <small>75 Brunswick Street</small>
          </div>
          <div className="d-flex gap-1 flex-column">
            <span className="fw-bold">Contact Detail</span>
            <small>07544920859</small>
          </div>
        </div>
        <hr className="m-0" />
        <div className="d-flex gap-4">
          <div className="d-flex flex-column">
            <small>Manchester</small>
            <small>M13 9SX</small>
          </div>
          <div className="d-flex gap-1 flex-column">
            <small>akbar.salamzada07@gmail.com</small>
          </div>
        </div>

        <div className="ps-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product/Service</th>
                <th scope="col">Unit</th>
                <th scope="col">Qty</th>
                <th scope="col">Rate</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <div>Carpet Replacement</div>
                  <div>
                    <p>Inclusive of material and labour</p>
                  </div>
                </th>
                <td className="flex-fill">m2</td>
                <td className="flex-fill">100</td>
                <td className="flex-fill">$15.00</td>
                <td className="flex-fill">$15,0000</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-6 my-3">
              <div className="fw-bold">
                Quotation will be valid for 30 days.
              </div>
            </div>
            <div className="col-md-6">
              <div className="px-2 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between tt">
                  <span className="fw-bold">Subtotal</span>
                  <span className="fw-bold">$15,000</span>
                </div>
                <div className="d-flex justify-content-between tt">
                  <span className="fw-bold">Discount</span>
                  <span className="fw-bold text-green text-decoration-underline">
                    Add Discount
                  </span>
                </div>
                <div className="d-flex justify-content-between tt">
                  <span className="fw-bold">Tax</span>
                  <span className="fw-bold text-green text-decoration-underline">
                    Add Tax
                  </span>
                </div>
                <div className="d-flex justify-content-between ttt">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold ">$15,000</span>
                </div>

                <div className="d-flex justify-content-between ">
                  <span className="fw-bold"> Required Deposite</span>
                  <div>
                    <input
                      type="text"
                      className="rounded-end-0 rounded border border-2"
                      placeholder="00.00"
                    />
                    <select
                      name=""
                      id=""
                      className="rounded-start-0 border border-start-0 border-2 p-1 rounded "
                    >
                      <option value="">$</option>
                    </select>
                  </div>
                  <span className="fw-bold ">$15,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end my-4">
            <button className="ud-btn btn-thm bdrs4 bdrs4-sm  py-1">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
