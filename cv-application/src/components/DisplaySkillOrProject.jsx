export default function DisplaySkillOrProject({state, headLabel}) {
    // console.log(skills)
    return (
        <div className={"display" + headLabel}>
            <h3>{headLabel == 'project' ? 'Projects ' : 'Skills'}</h3>
            <ul>
                { state.map((ele) => {
                    let values = ele["info"].split("\n")
                    return (
                        <li key={ele.id} className={headLabel+"DisplaySection"}>
                            <div className={headLabel + "Header"}><b>{ele["name"]}:&nbsp;</b></div>
                            <div className={headLabel+"List"}>
                                <ul>
                                    {values.map((value) => {
                                        return (
                                            <li key={value} className="special">{value}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}