import Roles from "./Roles";
import PropTypes from "prop-types";

const IndentityCheck = ({ handleChangeRoles, roles, rolesOptions }) => {
  return (
    <>
      <Roles
        handleChangeRoles={handleChangeRoles}
        roles={roles}
        rolesOptions={rolesOptions}
        label="Required to keep our platform safe and secure. "
      />
      <div className="my-5">
        <p>
          Why do we need to undertake ID verification checks? ID verification
          checks protects you from fraud and to ensure it is really you. You can
          be rest assured we will keep your documents safe and will not be
          visible to public. Read our Terms and Policy for further detail.
        </p>
      </div>
    </>
  );
};

export default IndentityCheck;

IndentityCheck.propTypes = {
  handleChangeRoles: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  rolesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
};
