import { FaHandHoldingDollar, FaRegEye } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const TradeInvoice = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="row pb40">
        <div className="col-lg-12">{/* <DashboardNavigation /> */}</div>
        <div className="col-lg-12">
          <div className="dashboard_title_area">
            <h2>Invoice</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xxl-3">
          <div className="d-flex align-items-center justify-content-between statistics_funfact">
            <div className="details">
              <div className="fz15">Net income</div>
              <div className="title">£2,000</div>
              <div className="text fz14">
                <span className="text-thm">$99</span> New Earning
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-income" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div className="d-flex align-items-center justify-content-between statistics_funfact">
            <div className="details">
              <div className="fz15">Recieved</div>
              <div className="title">1292</div>
              <div className="text fz14">
                <span className="text-thm">80+</span> New Completed
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-withdraw" />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xxl-3">
          <div className="d-flex align-items-center justify-content-between statistics_funfact">
            <div className="details">
              <div className="fz15">Pending Clearance</div>
              <div className="title">£1,000</div>
              <div className="text fz14">
                <span className="text-thm">35+</span> New Queue
              </div>
            </div>
            <div className="icon text-center">
              <i className="flaticon-sandclock" />
            </div>
          </div>
        </div>
      </div>

      <div className="invoice-table bg-white p-3 rounded">
        <table className="table">
          <thead>
            <tr>
              <th
                className="bg-light-blue"
                style={{ background: "#F1FCFA" }}
                scope="col"
              >
                Invoice ID
              </th>
              <th
                className="bg-light-blue"
                style={{ background: "#F1FCFA" }}
                scope="col"
              >
                Purchase Date
              </th>
              <th
                className="bg-light-blue"
                style={{ background: "#F1FCFA" }}
                scope="col"
              >
                Amount
              </th>
              <th
                className="bg-light-blue"
                style={{ background: "#F1FCFA" }}
                scope="col"
              >
                Payment Status
              </th>
              <th
                className="bg-light-blue"
                style={{ background: "#F1FCFA" }}
                scope="col"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={i}>
                <th scope="row">#01 Installing Kitchen</th>
                <td>April 9, 2022</td>
                <td>£15,000</td>
                <td>
                  <div className="bselect-style1 bdrl1 bdrn-sm border-0">
                    <div className="dropdown bootstrap-select d-flex flex-column">
                      <button
                        type="button"
                        className={`py-0 px-3 dropdown-toggle h-auto m-auto bg-light-${
                          getValue() === "completed"
                            ? "blue"
                            : getValue() === "overdue"
                            ? "red"
                            : "yellow"
                        } rounded text-${
                          getValue() === "completed"
                            ? "blue"
                            : getValue() === "overdue"
                            ? "red"
                            : "yellow"
                        } text-capitalize`}
                        data-bs-toggle="dropdown"
                      >
                        {getValue()}
                      </button>
                      <div className="dropdown-menu ">
                        <div className="inner show" id="bs-select-1">
                          <ul className="dropdown-menu inner show">
                            <li className="selected active">
                              <a className={`dropdown-item selected`}>
                                <span className="text">Options</span>
                              </a>
                            </li>
                            <li className="selected active">
                              <a className={`dropdown-item selected`}>
                                <span className="text">Options</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {i === 0 ? (
                    <button
                      onClick={() =>
                        navigate("/tradeperson/requests/quetation/preview")
                      }
                      className="border-0 p-1 rounded d-flex gap-1 align-items-center px-4 bg-light-red"
                    >
                      <FaRegEye size={20} /> Create
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        navigate("/tradeperson/requests/quetation/preview")
                      }
                      className="border-0 p-1 rounded d-flex gap-1 align-items-center px-4 bg-light-red"
                    >
                      <FaRegEye size={20} />
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeInvoice;

const getValue = () => {
  const randomValue = Math.floor(Math.random() * 10 + 1) % 10;
  if (randomValue >= 0 && randomValue <= 3) {
    return "pending";
  } else if (randomValue >= 4 && randomValue <= 6) {
    return "overdue";
  } else if (randomValue >= 7 && randomValue <= 10) {
    return "completed";
  }
};
