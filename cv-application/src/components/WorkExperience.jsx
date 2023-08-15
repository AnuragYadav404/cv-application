import { useState } from "react";
import PropTypes from "prop-types";

export default function WorkExperience({ experience, setExperience }) {
  // const [experience, setExperience] = euseState(initialWorkExp);
  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newYearFrom, setNewYearFrom] = useState("");
  const [newYearTo, setNewYearTo] = useState("");

  // function handleCompanyNameChange(newName, id) {
  //   setExperience(
  //     experience.map((exp) => {
  //       if (exp.id === id) {
  //         return {
  //           ...exp,
  //           companyName: newName,
  //         };
  //       } else {
  //         return exp;
  //       }
  //     })
  //   );
  // }

  // function handleRoleChange(newRole, id) {
  //   setExperience(
  //     experience.map((exp) => {
  //       if (exp.id === id) {
  //         return {
  //           ...exp,
  //           role: newRole,
  //         };
  //       } else {
  //         return exp;
  //       }
  //     })
  //   );
  // }

  // function handleYearChange(property, newYear, id) {
  //   setExperience(
  //     experience.map((exp) => {
  //       if (exp.id === id) {
  //         return {
  //           ...exp,
  //           [property]: newYear,
  //         };
  //       } else {
  //         return exp;
  //       }
  //     })
  //   );
  // }

  function handleExpChange(property, newValue, id) {
    setExperience(experience.map((exp) => {
      if(exp.id === id) {
        return {
          ...exp,
          [property]: newValue
        }
      }else {
        return exp
      }
    }))
  }

  function handleExperienceDelete(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  function addNewExperience() {
    // add check here for all the fields have been added
    if (
      newCompany.length > 0 &&
      newYearFrom.length > 0 &&
      newYearTo.length > 0 &&
      newRole.length>0
    ) {
      let newId = newCompany + "@" + newYearFrom + newYearTo;
      let newExp = {
        id: newId,
        companyName: newCompany,
        role: newRole,
        "yearFrom": newYearFrom,
        "yearTo": newYearTo,
      };
      setExperience([...experience, newExp]);
      setNewCompany("");
      setNewRole("")
      setNewYearFrom("");
      setNewYearTo("");
    }
  }

  return (
    <div className="workExperience">
      <ul className="workExperienceList">
        {experience.map((exp) => {
          return (
            <li key={exp.id}>
              <label htmlFor={exp.id + exp.companyName}>Company Name: </label>
              <input
                type="text"
                id={exp.id + exp.companyName}
                placeholder="Company Name"
                value={exp.companyName}
                onChange={(e) =>
                  handleExpChange("companyName", e.target.value, exp.id)
                }
              />
              <label htmlFor={exp.id + exp.role}>Role: </label>
              <input
                type="text"
                id={exp.id + exp.role}
                placeholder="Role"
                value={exp.role}
                onChange={(e) => handleExpChange("role", e.target.value, exp.id)}
              />
              <label htmlFor={exp.id + exp["yearFrom"]}>From: </label>
              <input
                type="text"
                id={exp.id + exp["yearFrom"]}
                placeholder="Start Year"
                value={exp.yearFrom}
                onChange={(e) =>
                  handleExpChange("yearFrom", e.target.value, exp.id)
                }
              />
              <label htmlFor={exp.id + exp["yearTo"]}>To: </label>
              <input
                type="text"
                id={exp.id + exp["yearTo"]}
                placeholder="End Year"
                value={exp.yearTo}
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
        {/* Add checks for checking all fields are entered before adding to the experience array */}
        <li key={"newExp"}>
          Add Experience:
          <label htmlFor="newExpCompany">Company Name: </label>
          <input
            type="text"
            id="newExpCompany"
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
            required
          />
          <label htmlFor="newExpRole">Role: </label>
          <input
            type="text"
            id="newExpRole"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
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

/*
 experience: Company Name
             Position
             Year from
             Year to
*/

WorkExperience.propTypes = {
  experience: PropTypes.any,
  setExperience: PropTypes.any,
};
