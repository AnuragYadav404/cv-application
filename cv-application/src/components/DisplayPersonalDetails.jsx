import "../App.css";
import PropTypes from "prop-types";

export default function DisplayPersonalDetails({
  name,
  email,
  phone,
  currentAddress,
}) {
  return (
    <div className="personalDetails">
      <b>Name: {name}</b>
      <b>Email: {email}</b>
      <b>Contact-Number: {phone}</b>
      <b>Current-Address: {currentAddress}</b>
    </div>
  );
}


DisplayPersonalDetails.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  currentAddress: PropTypes.string,
  name: PropTypes.string
}