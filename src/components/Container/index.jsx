import styled from "styled-components";

const StyledContainer = styled.div`
  width: 576px;
  margin: 0 auto;
  padding: 25.6px;
`;

const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;