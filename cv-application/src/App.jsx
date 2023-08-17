import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import DisplayPersonalDetails from "./components/DisplayPersonalDetails";
// import { Fragment } from "react";
import ExperienceDetails from "./components/ExperienceDetails";
import DisplayExperienceDetails from "./components/DisplayExperienceDetails";
import SkillsDetails from "./components/SkillsDetails";
import DisplaySkillsDetails from "./components/DisplaySkillDetails";
import SkillOrProject from "./components/SkillOrProject";
import DisplaySkillOrProject from "./components/DisplaySkillOrProject";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setNewSkills] = useState([]);

  const [loader, setLoader] = useState(false);

  function handleDownload() {
    const capture = document.querySelector('.cvPreview');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const cmpWidth = doc.internal.pageSize.getWidth();
      const cmpHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, cmpWidth, cmpHeight);
      setLoader(false);
      doc.save('resume.pdf');


    }).catch((reason) => {
      console.log(reason);
    })
  }
  return (
    <div className="cvApp">
      <div className="cvForm">
        <button onClick={handleDownload} disabled={loader===true  }>
          {loader ? "Downloading" : "download"}
        </button>
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
        <div className="SkillsData">
          <SkillOrProject
            inputState={skills}
            setInputState={setNewSkills}
            headLabel={"skills"}
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
        <div className="ProjectData">
          <SkillOrProject
            inputState={projects}
            setInputState={setProjects}
            headLabel={"project"}
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
          {/* <DisplaySkillsDetails skills={skills}/> */}
          <DisplaySkillOrProject state={skills} headLabel={"skill"} />
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
        <div className="projectsDataPreview">
          {/* <DisplaySkillsDetails skills={skills}/> */}
          <DisplaySkillOrProject state={projects} headLabel={"project"} />
        </div>
      </div>
    </div>
  );
}

export default App;
