import PropTypes from "prop-types";

const Skill = ({ title, votes }) => {
  return (
    <li>
      <p>{title}</p>
      <span className="votes">{votes}</span>
    </li>
  );
};
Skill.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Skill;
