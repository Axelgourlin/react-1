import PropTypes from "prop-types";

const Skill = ({ skill, votes }) => {
  return (
    <li>
      {skill}
      <span className="votes">{votes}</span>
    </li>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Skill;
