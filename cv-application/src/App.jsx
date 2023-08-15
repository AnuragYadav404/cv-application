import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import DisplayPersonalDetails from "./components/DisplayPersonalDetails";
import WorkExperience from "./components/WorkExperience";
import DisplayWorkExperience from "./components/DisplayWorkExperience";
// import { Fragment } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  // const [experience, setExperience] = useState([]);
  const [experience, setExperience] = useState(initialWorkExp);

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
      <DisplayPersonalDetails
        name={name}
        email={email}
        phone={phone}
        currentAddress={currentAddress}
      />
      <WorkExperience experience={experience} setExperience={setExperience} />
      <DisplayWorkExperience experience={experience} />
    </div>
  );
}

let initialWorkExp = [
  {
    id: "Microsoft@20242026",
    companyName: "Microsoft",
    yearFrom: 2024,
    yearTo: 2026,
  },
  {
    id: "Google@20262028",
    companyName: "Google",
    yearFrom: 2026,
    yearTo: 2028,
  },
  {
    id: "Tesla@20282030",
    companyName: "Tesla",
    yearFrom: 2028,
    yearTo: 2030,
  },
];

export default App;
