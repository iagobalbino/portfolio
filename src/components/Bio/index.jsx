import styled from "styled-components";
import Photo from "./Photo";

<<<<<<< HEAD
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
=======
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

>>>>>>> 6fe33466ab0527714464860a1bb3e5dd649ac318

  return (
<<<<<<< HEAD
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
=======
    <StyledSection>
      <img src={img} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </StyledSection>
>>>>>>> 6fe33466ab0527714464860a1bb3e5dd649ac318
  );
};

export default Bio;