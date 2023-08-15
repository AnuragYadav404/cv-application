import { useState } from "react";

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

  console.log(experience);

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
      newSubtitle.length > 0
    ) {
      let newId = newTitle + "@" + newYearFrom + newYearTo;
      let newExp = {
        id: newId,
        [title]: newTitle,
        [subtitle]: newSubtitle,
        yearFrom: newYearFrom,
        yearTo: newYearTo,
      };
      setExperience([...experience, newExp]);
      setNewTitle("");
      setNewSubtitle("");
      setNewYearFrom("");
      setNewYearTo("");
    }
  }

  return (
    <div className={experienceName}>
      <ul className={experienceName + "List"}>
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
              <button onClick={() => handleExperienceDelete(exp.id)}>
                Delete
              </button>
            </li>
          );
        })}
        <li key={"newExp"}>
          Add Experience:
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
