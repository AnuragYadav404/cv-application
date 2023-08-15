import { useState } from "react";


export default function WorkExperience() {
  const [experience, setExperience] = useState(initialWorkExp);
  const [newCompany, setNewCompany] = useState('');
  const [newYearFrom, setNewYearFrom] = useState('');
  const [newYearTo, setNewYearTo] = useState('');

  function handleCompanyNameChange(newName, id) {
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            companyName: newName,
          };
        } else {
          return exp;
        }
      })
    );
  }

  function handleYearChange(property, newYear, id) {
    setExperience(
      experience.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [property]: newYear,
          };
        } else {
          return exp;
        }
      })
    );
  }

  function handleExperienceDelete(id) {
    setExperience(
        experience.filter((exp) => exp.id!==id)
    )
  }

  function addNewExperience() {
    // add check here for all the fields have been added
    if(newCompany.length>0 && newYearFrom.length>0 && newYearTo.length>0){
        let newId = newCompany+'@'+newYearFrom+newYearTo;
        let newExp = {
            id: newId,
            companyName: newCompany,
            "yearFrom": newYearFrom,
            "yearTo": newYearTo,
        }
        setExperience([...experience, newExp]);
        setNewCompany('');
        setNewYearFrom('');
        setNewYearTo('');
    }
  }


  return (
    <div className="workExperience">
      <ul className="workExperienceList">
        {experience.map((exp) => {
          return (
            <li key={exp.id} >
              <label htmlFor="companyName">Company Name: </label>
              <input
                type="text"
                id="companyName"
                placeholder="Company Name"
                value={exp.companyName}
                onChange={(e) =>
                  handleCompanyNameChange(e.target.value, exp.id)
                }
              />
              <label htmlFor="yearFrom">From: </label>
              <input
                type="text"
                id="yearFrom"
                placeholder="Start Year"
                value={exp.yearFrom}
                onChange={(e) => handleYearChange("yearFrom", e.target.value, exp.id)}
              />
              <label htmlFor="yearTo">From: </label>
              <input
                type="text"
                id="yearTo"
                placeholder="End Year"
                value={exp.yearTo}
                onChange={(e) => handleYearChange("yearTo", e.target.value, exp.id)}
              />
              <button onClick={() => handleExperienceDelete(exp.id)}>Delete</button>
            </li>

          );
        })}
        {/* Add checks for checking all fields are entered before adding to the experience array */}
        <li key={"newExp"}>
            Add Experience: 
            <label htmlFor="newExpCompany">Company Name: </label>
            <input type="text" id="newExpCompany" value={newCompany} onChange={(e)=>setNewCompany(e.target.value)} required/>
            <label htmlFor="newExpYearFrom">From (year)</label>
            <input type="text" id="newExpYearFrom" value={newYearFrom} onChange={(e)=>setNewYearFrom(e.target.value)} required/>
            <label htmlFor="newExpYearTo">To (year)</label>
            <input type="text" id="newExpYearTo" value={newYearTo} onChange={(e)=>setNewYearTo(e.target.value)} required/>
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
let initialWorkExp = [
  {
    id: "Microsoft@20242026",
    companyName: "Microsoft",
    "yearFrom": 2024,
    "yearTo": 2026,
  },
  {
    id: "Google@20262028",
    companyName: "Google",
    "yearFrom": 2026,
    "yearTo": 2028,
  },
  {
    id: "Tesla@20282030",
    companyName: "Tesla",
    "yearFrom": 2028,
    "yearTo": 2030,
  },
];
