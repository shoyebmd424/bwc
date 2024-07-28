const Profile = () => {
  return (
    <>
      <div className="hnr d-flex gap-5 justify-content-between ">
        <div>
          <h4 className="fw-bold">Badge of Honour</h4>
          <div>Member since 2024</div>
          <div>Verified by BWC</div>
          <div>Offers Warranty</div>
        </div>
        <div>
          <h4 className="fw-bold">Trades</h4>
          <div>Plumbing</div>
        </div>
        <div>
          <h4 className="fw-bold">Accrediations</h4>
          <div>RICS</div>
        </div>
        <div>
          <h4 className="fw-bold">Experience</h4>
          <div>10 years</div>
        </div>
      </div>
      <div className="about my-3">
        <div className="d-flex gap-3">
          <h4 className="fw-bold">About</h4>
          <button className="btn text-green text-decoration-underline border">
            0 Shortlisted
          </button>
        </div>
        <div>
          We have been trading for 10 years specialising in plumbing services in
          our local community.
        </div>
      </div>
      <div className=" my-4 statment">
        <h4 className="fw-bold">Competency Statement</h4>
        <div>Experts in installation and maintenance of plumbing works.</div>
      </div>

      <h4 className="fw-bold my-4">Portfolio</h4>
      <div className="prtf d-flex flex-wrap gap-3 my-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="prtfy-pic">
            <img
              src="/images/blog/blog-1.jpg"
              alt=""
              className="h-100 w-100 rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
