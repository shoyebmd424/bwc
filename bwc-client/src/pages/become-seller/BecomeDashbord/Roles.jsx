import PropTypes from "prop-types";
const Roles = ({ handleChangeRoles, rolesOptions, roles, label }) => {
  return (
    <>
      <label className="text mt20 mb-2 fw-bold">{label}</label>
      <div className="d-flex flex-column gap-3">
        {rolesOptions?.map((val, index) => (
          <div
            onClick={() => handleChangeRoles(val)}
            key={index}
            className={`role-option  ${roles?.includes(val) && "active"}`}
          >
            <span>{val}</span>
            <span className="dot"></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roles;

Roles.propTypes = {
  handleChangeRoles: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  rolesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
};
