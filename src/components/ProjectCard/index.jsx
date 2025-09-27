import styled from "styled-components";

const StyledDiv = styled.div`
  width: 524.81px;
  height: 142.63px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: rgba(0, 0, 0, 0.38);
  }

  h6 {
   color: rgba(0, 0, 0, 0.87);
   margin: 6.4px 0;
  }

  p {
   color: rgba(0, 0, 0, 0.60);
   margin: 6.4px 0;
  }

  img {
    width: 142.63px;
    height: 142.63px;
  }
`;

const ProjectCard = ({ year, cardTitle, cardInfo, href, src, alt }) => {
  return (
    <StyledDiv>
      <div>
        <span>{year}</span>
        <h6>{cardTitle}</h6>
        <p>{cardInfo}</p>
      </div>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </StyledDiv>
  );
};

export default ProjectCard;