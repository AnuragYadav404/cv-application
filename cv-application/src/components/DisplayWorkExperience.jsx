import PropTypes from "prop-types";

export default function DisplayWorkExperience({ experience }) {
    return (
        <div className="displayWorkExperience">
            <ul>
                {experience.map((exp) => {
                   return  (<li key={exp.id}>
                        <b>Company: {exp.companyName} </b>
                        <b>From: {exp["yearFrom"]} </b>
                        <b>To: {exp["yearTo"]} </b>
                    </li>)
                })}
            </ul>
        </div>
    )
}

DisplayWorkExperience.propTypes = {
  experience: PropTypes.any,
};
