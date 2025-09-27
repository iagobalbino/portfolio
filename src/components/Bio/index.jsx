import styled from "styled-components";
import Photo from "./Photo";

const StyledBio = styled.section`
  padding: 25.6px;

  h1 {
    color: rgba(0, 0, 0, 0.87);
    font-size: 1.68rem;
    margin: 3.2px 0;
  }

  p {
    margin: 6.4px 0;
  }
`;

const Bio = ({ title, bio }) => {
  return (
    <StyledBio>
      <Photo
        src={'https://avatars.githubusercontent.com/u/42919327?v=4'}
        alt={'Iago Balbino'}
      />
      <div>
        <h1>{title}</h1>
        <p>{bio}</p>
      </div>
    </StyledBio>
  );
};

export default Bio;