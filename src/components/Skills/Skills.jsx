import { Title, List, Container, Item } from "./Skills.styled";
import PropTypes from "prop-types";

export const Skills = ({ meta }) => {
  const { skills } = meta;
  return (
    <Container>
      <Title>Skills</Title>
      <List>
        {skills.map((el, index) => (
          <li key={index}>
            <Item>{el}</Item>
          </li>
        ))}
      </List>
    </Container>
  );
};

Skills.propTypes = {
  meta: PropTypes.shape({
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};
