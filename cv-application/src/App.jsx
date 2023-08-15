import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import DisplayPersonalDetails from "./components/DisplayPersonalDetails";
import WorkExperience from "./components/WorkExperience";
import DisplayWorkExperience from "./components/DisplayWorkExperience";
// import { Fragment } from "react";
import ExperienceDetails from "./components/ExperienceDetails";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  // const [experience, setExperience] = useState([]);
  const [experience, setExperience] = useState(initialWorkExp);
  const [education, setEducation] = useState(initialEducation)
  console.log("App education is : ", education)
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
      <ExperienceDetails experienceName="EducationDetails" experience={education} setExperience={setEducation} title={"instituteName"} titleLabel={"Institute: "} subtitle={"course"} subtitleLabel={"Course: "}/>
    </div>
  );
}

let initialWorkExp = [
  {
    id: "Microsoft@20242026",
    role: "Sde",
    companyName: "Microsoft",
    yearFrom: 2024,
    yearTo: 2026,
  },
  {
    id: "Google@20262028",
    role: "Sde-2",
    companyName: "Google",
    yearFrom: 2026,
    yearTo: 2028,
  },
  {
    id: "Tesla@20282030",
    role: "Sde-2",
    companyName: "Tesla",
    yearFrom: 2028,
    yearTo: 2030,
  },
];

let initialEducation = [
  {
    id: "kv2@20072019",
    instituteName: "Kv no. 2 Jalahalli East",
    course: "School",
    yearFrom: 2007,
    yearTo: 2019,
  },
  {
    id: "mvit@20192023",
    instituteName: "Sir MVIT",
    course: "Btech in Computer Science",
    yearFrom: 2019,
    yearTo: 2023,
  },
]

export default App;
