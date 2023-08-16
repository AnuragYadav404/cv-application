import { useState } from "react";

export default function SkillsDetails({skillsState, setSkillsState}) {

    const [newType, setNewType] = useState('');
    const [newSkill, setNewSkill] = useState('');

    function handleSkillTypeChange(value, id) {
        setSkillsState(skillsState.map((skill) => {
            if(skill.id === id) {
                return {
                    ...skill,
                    "type": value
                }
            }else {
                return skill;
            }
        }))
    }

    function handleSkillValueChange(value, id) {
        setSkillsState(skillsState.map((skill) => {
            if(skill.id === id) {
                return {
                    ...skill,
                    "value": value
                }
            }else {
                return skill;
            }
        }))
    }

    function handleNewSkill() {
        if(newType.length>0 && newSkill.length>0) {
            let newEle = {
                id: newType,
                "type": newType,
                "value" : newSkill
            }
            setSkillsState([...skillsState, newEle]);
            setNewSkill('');
            setNewType('')
        }
    }

    function handleDeleteSkill(id) {
        setSkillsState(skillsState.filter((skill) => skill.id !== id))
    }

    return (
        <div className="skillsForm">
            <ul className="skillsFormList">
                {skillsState.map((skill) => {
                    return (
                        <li key={skill.id}>
                            <label htmlFor={skill.id}>Skill type: </label>
                            <input type="text" id={skill.id} value={skill["type"]} placeholder="Enter skill type" onChange={(e) => handleSkillTypeChange(e.target.value, skill.id)}/>
                            <label htmlFor={skill.id+"values"}>Skills: </label>
                            <textarea id={skill.id+"values"} cols="30" rows="10" value={skill["value"]} onChange={(e) => {handleSkillValueChange(e.target.value, skill.id)}} placeholder="Enter Skills"></textarea>
                            <button onClick={(e) => handleDeleteSkill(skill.id)}>Delete</button>
                        </li>
                    )
                })}
                <li key="addNewSkill">
                    <h3>Add new skill type</h3>
                    <label htmlFor="newSkillType">Skill type:</label>
                    <input type="text" id="newSkillType" value={newType} onChange={(e) => setNewType(e.target.value)} required/>
                    <label htmlFor="newSkillValues">Skills: </label>
                    <textarea id="newSkillValues" cols="30" rows="10" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Enter skills here" required></textarea>
                    <button onClick={handleNewSkill}>Add</button>
                </li>
            </ul>
        </div>
    )
}