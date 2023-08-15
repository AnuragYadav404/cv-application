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
                        <li key={exp.id}>
                            <div className="expSectionOne">
                                <b>{titleLabel} {exp[title]} </b>
                            </div>
                            <div className="expSectionTwo">
                                <b>{subtitleLabel} {exp[subtitle]} </b>
                                <div className="duration">
                                    <b>Duration: {exp["yearFrom"]}-{exp["yearTo"]}</b>
                                </div>
                            </div>

                        </li>
                    )
               })} 
            </ul>

        </div>
    )
}