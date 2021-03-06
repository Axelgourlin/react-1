import axios from "axios";
import { useState } from "react";
import Skill from "../components/Skill";

import styled from "styled-components";

const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .form__groupItem {
    display: flex;
    gap: 10px;
  }
  .form__item {
    width: 8rem;
    display: flex;
    flex-direction: column;
  }
  .form__input {
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 2px #000;
    margin-bottom: 5px;
    padding: 4px;
  }
  .form__btnSubmit {
    width: 8rem;
  }
  .form__skills {
    h4 {
      margin: 2px 0;
    }
    p {
      color: #757575;
      line-height: 1.5;
    }
    .skills {
      gap: 10px;
    }
  }
`;

const Form = ({ onError, getWilders }) => {
  const [name, setName] = useState("Test");
  console.log("🚀 ~ Form ~ name", name);
  const [city, setCity] = useState("TestCity");
  console.log("🚀 ~ Form ~ city", city);
  const [skill, setSkill] = useState({ title: "", votes: 0 });
  console.log("🚀 ~ Form ~ skill", skill);
  const [skills, setSkills] = useState([]);
  console.log("🚀 ~ Form ~ skills", skills);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const inputWildersData = { name: name, city: city, skills: skills };

      const res = await axios.post(`${process.env.REACT_APP_URL_API}/wilders`, {
        ...inputWildersData,
      });
      console.log("🚀 ~ submitForm ~ res", res);

      setName("");
      setCity("");
      setSkills([]);
      getWilders();
    } catch (error) {
      onError({ message: error, status: true });
    }
  };

  const addSkill = () => {
    skills.push(skill);
    setSkill({ title: "", votes: 0 });
  };

  return (
    <FormContainer className="form" onSubmit={submitForm}>
      <div className="form__groupItem">
        <div className="form__item">
          <label htmlFor="name" className="form__label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form__input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form__item">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            className="form__input"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>

        <div className="form__item">
          <label className="form__label">Skills:</label>
          <input
            type="text"
            placeholder="Title.."
            className="form__input"
            onChange={(e) => setSkill({ ...skill, title: e.target.value })}
            value={skill.title}
          />
          <input
            type="number"
            placeholder="Votes.."
            className="form__input"
            onChange={(e) => setSkill({ ...skill, votes: e.target.value })}
            value={skill.votes}
          />
          <button
            className="form__btnRemove"
            onClick={(e) => {
              e.preventDefault();
              addSkill();
            }}
          >
            +
          </button>
        </div>
      </div>

      {skills.length >= 1 && (
        <div className="form__skills">
          <h4>Skills :</h4>
          <ul className="skills">
            {skills.map((skill, i) => (
              <Skill key={i} title={skill.title} votes={skill.votes} />
            ))}
          </ul>
        </div>
      )}
      <button type="submit" className="form__btnSubmit">
        Submit
      </button>
    </FormContainer>
  );
};

export default Form;
