import { Title, List, Container, Item } from "./Skills.styled";

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
