import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-bottom: 25.6px;
`;

const Photo = ({ src, alt }) => {
  return (
    <div>
      <StyledImg src={src} alt={alt} />
    </div>
  );
};

export default Photo;