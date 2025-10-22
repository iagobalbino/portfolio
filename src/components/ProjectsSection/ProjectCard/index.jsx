import styled from "styled-components";
import { device } from "../../Breakpoints";

const StyledDiv = styled.div`
  max-width: 33rem;
  /* height: 142.63px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.2rem;

  span {
    color: rgba(0, 0, 0, 0.38);
  }

  h6 {
   color: #000000de;
   margin: 6.4px 0;
  }

  p {
   color: rgba(0, 0, 0, 0.60);
   /* color: #00000061; */
   margin: 6.4px 0;
  }

  img {
    width: 142px;
    /* height: 520px; */
    aspect-ratio: 1 / 1;
    border-radius: 1.5rem;
  }
  

  @media (max-width:${device.sm}) {
    flex-direction: column-reverse;
    align-items: flex-start;

    h6, p {
      font-size: 1.2rem;
    }
  
    img {
      width: 520px;
    }
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
      <a href={href} target="_blank">
        <img src={src} alt={alt} />
      </a>
    </StyledDiv>
  );
};

export default ProjectCard;