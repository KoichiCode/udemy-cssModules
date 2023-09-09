import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitile>-Styled Components-</STitile>
      <SButton>heeeeeey</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitile = styled.p`
  margin: 0;
  color: #392eff;
`;

const SButton = styled.button`
  background-color: pink;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: red;
    color: #fff;
    cursor: pointer;
  }
`;
