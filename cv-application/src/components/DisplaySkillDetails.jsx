export default function DisplaySkillsDetails({skills}) {
    
    return (
        <div className="displaySkills">
            <h3>Skills</h3>
            <ul>
                {skills.map((skill) => {
                    let values = skill["value"].split("\n")
                    return (
                        <li key={skill.id} className="skillDisplaySection">
                            <div className="skillHeader"><b>{skill["type"]}:&nbsp;</b></div>
                            <div className="skillList">
                                {values.map((value) => {
                                    return (
                                        <li key={value}>{value}</li>
                                    )
                                })}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}