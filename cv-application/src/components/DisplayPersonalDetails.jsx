import "../App.css";
import PropTypes from "prop-types";

export default function DisplayPersonalDetails({
  name,
  email,
  phone,
  currentAddress,
}) {

  return (
    <div className="personalDetailsDisplay">
      <div className="headerName">
        <h2>{name}</h2>
      </div>
      <div className="headerDetails">
        <b>|Email: {email}|</b>
        <b>|Contact-Number: {phone}|</b>
        <b>|Current-Address: {currentAddress}|</b>
      </div>
    </div>
  );
}


DisplayPersonalDetails.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  currentAddress: PropTypes.string,
  name: PropTypes.string
}