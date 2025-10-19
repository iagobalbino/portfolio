import { Link } from "react-router";
import styled from "styled-components";
import Home from "../../pages/Home";
import { device } from "../Breakpoints";

const Bio = ({ title, bio, img, alt }) => {
  const StyledSection = styled.section`
    box-sizing: border-box;
    margin-top: 24px;
    width: 576px;
    padding: 25.6px;


    img {
      border-radius: 100%;
      width: 80px;
      height: 80px;
    }

    h5 {
      font-weight: 500;
      font-size: 1.68rem;
      color: #000000de;
      margin: 3.2px 0;
    }

    p {
      margin: 6.4px 0 12.8px;
      }

      @media (max-width: ${device.sm}) {
        max-width: 528px;
        p {
          font-size: 1.2rem;
          /* line-height: 1.2; */
        }
      }
  `;


  return (
    <StyledSection>
      <img src={img} alt={alt} />
      <div>
        <h5>{title}</h5>
        <p>{bio}</p>
      </div>
    </StyledSection >
  );
};

export default Bio;