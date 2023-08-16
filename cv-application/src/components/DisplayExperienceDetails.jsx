export default function DisplayExperienceDetails({experienceName, experience, title, titleLabel, subtitle,subtitleLabel}) {
    let headerLabel = "Work Experience";
    if(experienceName === 'EducationDetails') {
        headerLabel = "Education"
    }
    return (
        <div className={'display' + experienceName}>
            <h3>{headerLabel}</h3>
            <ul>
               {experience.map((exp) => {
                    return(
                        <li key={exp.id} className="expSection">
                            <div className="expSectionOne">
                                <b>{titleLabel} {exp[title]} </b>
                                <b>Location: {exp["location"]}</b>
                            </div>
                            <div className="expSectionTwo">
                                <p>{subtitleLabel} {exp[subtitle]} </p>
                                <div className="duration">
                                    <p>Duration: {exp["yearFrom"]}-{exp["yearTo"]}</p>
                                </div>
                            </div>
                            { exp["desc"].length>0 && <div className="expSectionThree">
                                <ol>
                                {exp["desc"].split("\n").map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                                </ol> 
                            </div>}

                        </li>
                    )
               })} 
            </ul>

            </div>
    )
}