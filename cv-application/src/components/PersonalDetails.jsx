import "../App.css";
import PropTypes from "prop-types";

export default function PersonalDetailsForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  currentAddress,
  setCurrentAddress,
}) {
  return (
    <div className="personalDetails">
      <label htmlFor="personalName">Name:</label>
      <input
        id="personalName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <label htmlFor="personalEmail">Email:</label>
      <input
        id="personalEmail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <label htmlFor="personalNumber">Contact number:</label>
      <input
        id="personalNumber"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter contact number"
      />
      <label htmlFor="personalAddress">Current address</label>
      <input
        id="personalAddress"
        type="text"
        value={currentAddress}
        onChange={(e) => setCurrentAddress(e.target.value)}
        placeholder="State, Country"
      />
    </div>
  );
}


PersonalDetailsForm.propTypes = {
  setCurrentAddress: PropTypes.any,
  setEmail: PropTypes.any,
  setPhone: PropTypes.any,
  setName: PropTypes.any,
  email: PropTypes.string,
  phone: PropTypes.string,
  currentAddress: PropTypes.string,
  name: PropTypes.string
}