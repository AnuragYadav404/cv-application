import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import DisplayPersonalDetails from "./components/DisplayPersonalDetails";
// import { Fragment } from "react";
import ExperienceDetails from "./components/ExperienceDetails";
import DisplayExperienceDetails from "./components/DisplayExperienceDetails";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [work, setWork] = useState(initialWorkExp);
  const [education, setEducation] = useState(initialEducation);
  return (
    <div className="cvApp">
      <div className="cvForm">
        <div className="header">
          <h1>CV Maker</h1>
        </div>
        <div className="personalData">
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
        </div>
        <div className="workData">
          <ExperienceDetails
            experienceName="WorkDetails"
            experience={work}
            setExperience={setWork}
            title={"companyName"}
            titleLabel={"Company: "}
            subtitle={"role"}
            subtitleLabel={"Role: "}
          />
        </div>
        <div className="educationData">
          <ExperienceDetails
            experienceName="EducationDetails"
            experience={education}
            setExperience={setEducation}
            title={"instituteName"}
            titleLabel={"Institute: "}
            subtitle={"course"}
            subtitleLabel={"Course: "}
          />
        </div>
      </div>
      <div className="cvPreview">
        <div className="personalDataPreview">
          <DisplayPersonalDetails
            name={name}
            email={email}
            phone={phone}
            currentAddress={currentAddress}
          />
        </div>
        <div className="workDataPreview">
          <DisplayExperienceDetails
            experienceName="WorkDetails"
            experience={work}
            title={"companyName"}
            titleLabel={"Company: "}
            subtitle={"role"}
            subtitleLabel={"Role: "}
          />
        </div>
        <div className="educationDataPreview">
          <DisplayExperienceDetails
            experienceName="EducationDetails"
            experience={education}
            title={"instituteName"}
            titleLabel={"Institute: "}
            subtitle={"course"}
            subtitleLabel={"Course: "}
          />
        </div>
      </div>
    </div>
    // <div className="mainDiv">
    //   {/* PersonalDetails section */}
    //   <PersonalDetailsForm
    //     name={name}
    //     setName={setName}
    //     email={email}
    //     setEmail={setEmail}
    //     phone={phone}
    //     setPhone={setPhone}
    //     currentAddress={currentAddress}
    //     setCurrentAddress={setCurrentAddress}
    //   />
    //   <DisplayPersonalDetails
    //     name={name}
    //     email={email}
    //     phone={phone}
    //     currentAddress={currentAddress}
    //   />
    //   <ExperienceDetails
    //     experienceName="ExperienceDetails"
    //     experience={work}
    //     setExperience={setWork}
    //     title={"companyName"}
    //     titleLabel={"Company: "}
    //     subtitle={"role"}
    //     subtitleLabel={"Role: "}
    //   />
    //   <DisplayExperienceDetails
    //     experienceName="ExperienceDetails"
    //     experience={work}
    //     title={"companyName"}
    //     titleLabel={"Company: "}
    //     subtitle={"role"}
    //     subtitleLabel={"Role: "}
    //   />

    //   <ExperienceDetails
    //     experienceName="EducationDetails"
    //     experience={education}
    //     setExperience={setEducation}
    //     title={"instituteName"}
    //     titleLabel={"Institute: "}
    //     subtitle={"course"}
    //     subtitleLabel={"Course: "}
    //   />
    //   <DisplayExperienceDetails
    //     experienceName="EducationDetails"
    //     experience={education}
    //     title={"instituteName"}
    //     titleLabel={"Institute: "}
    //     subtitle={"course"}
    //     subtitleLabel={"Course: "}
    //   />
    // </div>
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
];

export default App;
