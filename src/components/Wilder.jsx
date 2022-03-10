import Skill from "./Skill";
import PropTypes from "prop-types";

const Wilder = ({ name, img, description, skills }) => {
  return (
    <article className="card">
      <img src={img} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, i) => (
          <Skill key={i} name={skill.name} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
};
Wilder.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, votes: PropTypes.number })
  ).isRequired,
};

export default Wilder;
