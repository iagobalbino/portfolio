import styled from "styled-components";

const Bio = ({ title, bio, img, alt }) => {
  const StyledSection = styled.section`
    margin-top: 24px;
    width: 576px;

    img {
      border-radius: 100%;
      width: 80px;
      height: 80px;
    }
  `;


  return (
    <StyledSection>
      <img src={img} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </StyledSection>
  );
};

export default Bio;