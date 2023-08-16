import { useState } from "react";

export default function SkillOrProject({inputState, setInputState, headLabel}) {

    const [newHead, setNewHead] = useState('');
    const [newInfo, setNewInfo] = useState('');
    console.log("input state is", inputState);

    function handleHeadChange(value, id) {
        setInputState(inputState.map((ele) => {
            if(ele.id === id) {
                return {
                    ...ele,
                    "name": value
                }
            }else {
                return ele;
            }
        }))
    }

    function handleInfoChange(value, id) {
        setInputState(inputState.map((ele) => {
            if(ele.id === id) {
                return {
                    ...ele,
                    "info": value
                }
            }else {
                return ele;
            }
        }))
    }

    function handleNewState() {
        if(newHead.length>0 && newInfo.length>0) {
            let newEle = {
                id: newHead,
                "name": newHead,
                "info" : newInfo
            }
            setInputState([...inputState, newEle]);
            setNewHead('');
            setNewInfo('')
        }
    }

    function handleDeleteSkill(id) {
        setInputState(inputState.filter((ele) => ele.id !== id))
    }

    return (
        <div className= {headLabel+"Form"}>
            <ul className={headLabel+"FormList"}>
                {inputState.map((ele) => {
                    return (
                        <li key={ele.id}>
                            <label htmlFor={ele.id}>{headLabel=='project' ? 'Project Name: ' : 'Skill type: '}</label>
                            <input type="text" id={ele.id} value={ele["name"]} placeholder={"Enter "+ (headLabel=='project' ? 'Project Name: ' : 'Skill type')} onChange={(e) => handleHeadChange(e.target.value, ele.id)}/>
                            <label htmlFor={ele.id+"info"}>{headLabel=='project' ? 'Project Details: ' : 'Skills: '}</label>
                            <textarea id={ele.id+"info"} cols="30" rows="10" value={ele["info"]} onChange={(e) => {handleInfoChange(e.target.value, ele.id)}} placeholder={(headLabel=='project' ? 'Enter Project Details' : 'Enter Skills')}></textarea>
                            <button onClick={() => handleDeleteSkill(ele.id)}>Delete</button>
                        </li>
                    )
                })}
                <li key="addNewSkill">
                    <h3>{headLabel=='project' ? 'Add new project ' : 'Add new skill'}</h3>
                    <label htmlFor="newHead">{headLabel=='project' ? 'Project Name: ' : 'Skill type: '}</label>
                    <input type="text" id="newHead" value={newHead} onChange={(e) => setNewHead(e.target.value)} required/>
                    <label htmlFor="newInfo">{headLabel=='project' ? 'Project Details: ' : 'Skills: '} </label>
                    <textarea id="newInfo" cols="30" rows="10" value={newInfo} onChange={(e) => setNewInfo(e.target.value)} placeholder="Enter skills here" required></textarea>
                    <button onClick={handleNewState}>Add</button>
                </li>
            </ul>
        </div>
    )
}