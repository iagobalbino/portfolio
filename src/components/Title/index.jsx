import styled from "styled-components";

const Title = ({ title }) => {
  const StyledH6 = styled.h6`
      font-weight: 500;
      font-size: 1.68rem;
      color: #000000de;
      /* margin: 6.4px 0; */
      padding: 25.6px;
  `;

  return (
    <StyledH6>
      {title}
    </StyledH6>
  );
};

export default Title;