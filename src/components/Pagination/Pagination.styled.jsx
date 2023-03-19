import styled from "styled-components";

export const App = styled.div`
  min-height: 100vh;
  color: white;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Text = styled.p`
  opacity: 0.6;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  color: white;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: solid 0.2rem #9a8f8f;
  background-color: transparent;
  border-radius: 0.7rem;
  cursor: pointer;
  &:hover {
    background-color: #9a8f8f;
  }
`;

export const ButtonActive = styled(Button)`
  background-color: ${(props) =>
    props.page === props.el ? "background-color: #9a8f8f;" : ""};
`;

export const ButtonDisabled = styled(Button)`
  background-color: transparent !important;
  cursor: not-allowed;
  opacity: 0.5;
`;
