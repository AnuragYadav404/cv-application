import { useState } from "react";
import PropTypes from "prop-types";

export default function ExperienceDetails({
  experienceName,
  experience,
  setExperience,
  title,
  titleLabel,
  subtitle,
  subtitleLabel,
}) {
  const [newTitle, setNewTitle] = useState("");
  const [newSubtitle, setNewSubtitle] = useState("");
  const [newYearFrom, setNewYearFrom] = useState("");
  const [newYearTo, setNewYearTo] = useState("");
  const [newLoc, setNewLoc] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(experience);
  let cardLabel = "Work Experience";
  if(experienceName === 'EducationDetails') {
    cardLabel = "Education Details"
  }

  // 

  function handleExpChange(property, newValue, id) {
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [property]: newValue,
          };
        } else {
          return exp;
        }
      })
    );
  }

  function handleExperienceDelete(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  function addNewExperience() {
    if (
      newTitle.length > 0 &&
      newYearFrom.length > 0 &&
      newYearTo.length > 0 &&
      newSubtitle.length > 0 &&
      newLoc.length>0
    ) {
      let newId = newTitle + "@" + newYearFrom + newYearTo;
      let newExp = {
        id: newId,
        [title]: newTitle,
        [subtitle]: newSubtitle,
        "yearFrom": newYearFrom,
        "yearTo": newYearTo,
        "location": newLoc,
        "desc" : desc
      };
      setExperience([...experience, newExp]);
      setNewTitle("");
      setNewSubtitle("");
      setNewYearFrom("");
      setNewYearTo("");
      setNewLoc("");
      setDesc("");
    }
  }

  return (
    <div className={experienceName}>
      <ul className={experienceName + "List"}>
        <h2>{cardLabel}</h2>
        {experience.map((exp) => {
          return (
            <li key={exp.id}>
              <label htmlFor={exp.id + exp[title]}>{titleLabel}</label>
              <input
                type="text"
                id={exp.id + exp[title]}
                placeholder={titleLabel}
                value={exp[title]}
                onChange={(e) => handleExpChange(title, e.target.value, exp.id)}
              />
              <label htmlFor={exp.id + exp[subtitle]}>{subtitleLabel}</label>
              <input
                type="text"
                id={exp.id + exp[subtitle]}
                placeholder={subtitleLabel}
                value={exp[subtitle]}
                onChange={(e) =>
                  handleExpChange(subtitle, e.target.value, exp.id)
                }
              />
              <label htmlFor={exp.id + exp["yearFrom"]}>From: </label>
              <input
                type="text"
                id={exp.id + exp["yearFrom"]}
                placeholder="Start Year"
                value={exp["yearFrom"]}
                onChange={(e) =>
                  handleExpChange("yearFrom", e.target.value, exp.id)
                }
              />
              <label htmlFor={exp.id + exp["yearTo"]}>To: </label>
              <input
                type="text"
                id={exp.id + exp["yearTo"]}
                placeholder="End Year"
                value={exp["yearTo"]}
                onChange={(e) =>
                  handleExpChange("yearTo", e.target.value, exp.id)
                }
              />
              <label htmlFor={exp.id + exp["location"]}>Location: </label>
              <input
                type="text"
                id={exp.id + exp["location"]}
                placeholder="Location (State, City)"
                value={exp["location"]}
                onChange={(e) =>
                  handleExpChange("location", e.target.value, exp.id)
                }
              />
              <label htmlFor={exp.id + "desc"}>Description</label>
              <textarea  id={exp.id + "desc"} cols="30" rows="10" value={exp["desc"]} onChange={(e) => handleExpChange("desc", e.target.value, exp.id)}></textarea>
              <button onClick={() => handleExperienceDelete(exp.id)}>
                Delete
              </button>
            </li>
          );
        })}
        <li key={"newExp"}>
          <h3>Add Experience:</h3>
          <label htmlFor="newExpTitle">{titleLabel}</label>
          <input
            type="text"
            id="newExpTitle"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <label htmlFor="newExpSubtitle">{subtitleLabel}</label>
          <input
            type="text"
            id="newExpSubtitle"
            value={newSubtitle}
            onChange={(e) => setNewSubtitle(e.target.value)}
            required
          />
          <label htmlFor="newExpYearFrom">From (year)</label>
          <input
            type="text"
            id="newExpYearFrom"
            value={newYearFrom}
            onChange={(e) => setNewYearFrom(e.target.value)}
            required
          />
          <label htmlFor="newExpYearTo">To (year)</label>
          <input
            type="text"
            id="newExpYearTo"
            value={newYearTo}
            onChange={(e) => setNewYearTo(e.target.value)}
            required
          />
          <label htmlFor="newLoc">Location: </label>
          <input
            type="text"
            id="newLoc"
            value={newLoc}
            onChange={(e) => setNewLoc(e.target.value)}
            required
          />
          <label htmlFor="newDesc">Description: </label>
          <textarea id="newDesc" cols="30" rows="10" placeholder="One line points only, Start with '-'" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
          <button onClick={addNewExperience}>Add</button>
        </li>
      </ul>
    </div>
  );
}

ExperienceDetails.propTypes = {
  experience: PropTypes.any,
  setExperience: PropTypes.any,
};
