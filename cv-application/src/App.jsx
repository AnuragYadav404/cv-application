import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import DisplayPersonalDetails from "./components/DisplayPersonalDetails";
import WorkExperience from "./components/WorkExperience";
import { Fragment } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  // const [experience, setExperience] = useState([]);

  return (
    <div className="mainDiv">
      {/* PersonalDetails section */}
      <PersonalDetailsForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        currentAddress={currentAddress}
        setCurrentAddress={setCurrentAddress}
      />
      <DisplayPersonalDetails name={name} email={email} phone={phone} currentAddress={currentAddress} />
      <WorkExperience />
    </div>
  );
}

export default App;
