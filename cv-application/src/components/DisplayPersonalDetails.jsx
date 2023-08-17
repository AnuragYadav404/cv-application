import "../App.css";
import PropTypes from "prop-types";
import emailLogo from '../assets/email.svg'
import phoneLogo from '../assets/phone.svg'
import addressLogo from '../assets/address.svg'

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
        
      <div className="infoItem">
          <img src={emailLogo} alt="Email" className="icon" />
          <span className="infoText">{email}</span>
      </div>

      <div className="infoItem">
          <img src={phoneLogo} alt="Phone" className="icon" />
          <span className="infoText">{phone}</span>
      </div>

      <div className="infoItem">
          <img src={addressLogo} alt="Address" className="icon" />
          <span className="infoText">{currentAddress}</span>
      </div>
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