import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import DisplayPersonalDetails from "./components/DisplayPersonalDetails";
// import { Fragment } from "react";
import ExperienceDetails from "./components/ExperienceDetails";
import DisplayExperienceDetails from "./components/DisplayExperienceDetails";
import SkillsDetails from "./components/SkillsDetails";
import DisplaySkillsDetails from "./components/DisplaySkillDetails";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);

  const [skills, setNewSkills] = useState(initialSkills);
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
        <div className="SkillsData">
          <SkillsDetails skillsState={skills} setSkillsState={setNewSkills}/>
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
        <div className="personalDataPreview" key={"personalDetail"}>
          <DisplayPersonalDetails
            name={name}
            email={email}
            phone={phone}
            currentAddress={currentAddress}
          />
        </div>
        <div className="educationDataPreview" key={"EducationDetails"}>
          <DisplayExperienceDetails
            experienceName="EducationDetails"
            experience={education}
            title={"instituteName"}
            titleLabel={"Institute: "}
            subtitle={"course"}
            subtitleLabel={"Course: "}
          />
        </div>
        <div className="skillsDataPreview">
          <DisplaySkillsDetails skills={skills}/>
        </div>
        <div className="workDataPreview" key={"WorkDetails"}>
          <DisplayExperienceDetails
            experienceName="WorkDetails"
            experience={work}
            title={"companyName"}
            titleLabel={"Company: "}
            subtitle={"role"}
            subtitleLabel={"Role: "}
          />
        </div>
      </div>
    </div>
  );
}

let initialSkills = [
  {
    id: "language",
    "type": "language",
    "value" : "C++, Java, Go, Js"
  },
  {
    id: "frameworks",
    "type": "frameworks",
    "value" : "React, Node, Django"
  }
]

export default App;
