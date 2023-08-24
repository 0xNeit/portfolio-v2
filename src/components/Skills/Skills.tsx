import React, { useState } from 'react';

import CategoryButton from './CategoryButton';
import SkillBar from './SkillBar';

interface Skill {
  title: string;
  competency: number;
  category: string[];
}

interface Category {
  name: string;
  color: string;
}

interface SkillsProps {
  skills: Skill[];
  categories: Category[];
}

const Skills: React.FC<SkillsProps> = ({ skills = [], categories = [] }) => {
  const [buttons, setButtons] = useState<{ [key: string]: boolean }>(() => {
    const initialButtons: { [key: string]: boolean } = { All: true };
    categories.forEach((cat) => {
      initialButtons[cat.name] = false;
    });
    return initialButtons;
  });

  const handleChildClick = (label: string) => {
    setButtons((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const newButtons: { [key: string]: boolean } = { ...prevState };
      newButtons[label] = !prevState[label];
      // Turn on 'All' button if other buttons are off
      newButtons.All = !Object.keys(prevState).some((key) => newButtons[key]);
      return newButtons;
    });
  };

  const getRows = () => {
    // Search for true active categories
    const actCat = Object.keys(buttons).reduce((cat, key) =>
      buttons[key] ? key : cat, 'All');

    return skills
      .sort((a, b) => {
        let ret = 0;
        if (a.competency > b.competency) ret = -1;
        else if (a.competency < b.competency) ret = 1;
        else if (a.category[0] > b.category[0]) ret = -1;
        else if (a.category[0] < b.category[0]) ret = 1;
        else if (a.title > b.title) ret = 1;
        else if (a.title < b.title) ret = -1;
        return ret;
      })
      .filter((skill) => actCat === 'All' || skill.category.includes(actCat))
      .map((skill) => (
        <SkillBar
          categories={categories}
          data={skill}
          key={skill.title}
        />
      ));
  };

  const getButtons = () => {
    return Object.keys(buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={buttons}
        handleClick={handleChildClick}
      />
    ));
  };

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
        <p>
          Note: I think these sections are silly, but everyone seems to have one.
          Here is a *mostly* honest overview of my skills.
        </p>
      </div>
      <div className="skill-button-container">
        {getButtons()}
      </div>
      <div className="skill-row-container">
        {getRows()}
      </div>
    </div>
  );
};

export default Skills;
