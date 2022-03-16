import PropTypes from "prop-types";
import styled from "styled-components";

const Skills = styled.li`
  input {
    width: 40%;
  }
`;

const Skill = ({ title, votes, isEditing, setWilder, wilder }) => {
  return (
    <Skills>
      {isEditing ? (
        <>
          <label>City:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setWilder({ ...wilder, title: e.target.value })}
          />
        </>
      ) : (
        <p>{title}</p>
      )}
      {isEditing ? (
        <>
          <label>City:</label>
          <input
            type="number"
            value={votes}
            onChange={(e) => setWilder({ ...wilder, votes: e.target.value })}
          />
        </>
      ) : (
        <span className="votes">{votes}</span>
      )}
    </Skills>
  );
};
Skill.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Skill;

// {isEditing ? (
//   <>
//     <label>City:</label>
//     <input
//       type="text"
//       value={wilder.city}
//       onChange={(e) => setWilder({ ...wilder, city: e.target.value })}
//     />
//   </>
// ) : (
//   <p>{city}</p>
// )}
