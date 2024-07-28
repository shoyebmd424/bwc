import { useState } from "react";

const AddYourPaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityNo, setSecurityNo] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in mm/yy format";
    }
    if (!securityNo || !/^\d{3}$/.test(securityNo)) {
      newErrors.securityNo = "Security number must be 3 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted", { cardNumber, expiryDate, securityNo });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text  mb-2 mt20 fw-bold">Add your payment method</h5>
      <label className="text mb20 mb-2">
        Do not worry we will not take a single penny until you are shortlisted
        for a job
      </label>

      <div className="mb20">
        <label className="text mt20 mb-2">Card Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="XXXXXXXXXXXXXXXX"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        {errors.cardNumber && (
          <div className="text-danger">{errors.cardNumber}</div>
        )}
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb20">
            <label className="text mt20 mb-2">Expiry date</label>
            <input
              type="text"
              className="form-control"
              placeholder="mm/yy"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            {errors.expiryDate && (
              <div className="text-danger">{errors.expiryDate}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb20">
            <label className="text mt20 mb-2">Security No.</label>
            <input
              type="text"
              className="form-control"
              maxLength={3}
              placeholder="123"
              value={securityNo}
              onChange={(e) => setSecurityNo(e.target.value)}
            />
            {errors.securityNo && (
              <div className="text-danger">{errors.securityNo}</div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddYourPaymentMethod;
