export default function DisplayExperienceDetails({experienceName, experience, title, titleLabel, subtitle,subtitleLabel}) {
    return (
        <div className={'display' + experienceName}>
            <ul>
               {experience.map((exp) => {
                    return(
                        <li key={exp.id}>
                            <b>{titleLabel}: {exp[title]} </b>
                            <b>{subtitleLabel}: {exp[subtitle]} </b>
                            <b>From: {exp["yearFrom"]} </b>
                            <b>To: {exp["yearTo"]} </b>

                        </li>
                    )
               })} 
            </ul>

        </div>
    )
}