// @ts-nocheck
import Skill from "./Skill";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

const BtnRemove = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #f76c6c;
  border-radius: 3px;
  border: none;
  color: #fff;
  box-shadow: 0px 0px 1px #000;
  :hover {
    box-shadow: 0px 0px 4px #000;
    cursor: pointer;
  }
`;

const Wilder = ({ _id, name, img, city, skills, onError, getWilders }) => {
  const [isEditing, setIsEditing] = useState(false);

  const removeWilder = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL_API}/wilders/${_id}`);
      getWilders();
    } catch (error) {
      onError(error);
    }
  };

  return (
    <article className="card">
      <img src={img} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, i) => (
          <Skill key={i} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
      <BtnRemove onClick={removeWilder} className="btnRemove">
        X
      </BtnRemove>
    </article>
  );
};
Wilder.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  city: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, votes: PropTypes.number })
  ).isRequired,
  refreshPage: PropTypes.func,
};

export default Wilder;
