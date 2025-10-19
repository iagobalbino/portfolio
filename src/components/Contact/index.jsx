import styled from "styled-components";
import MenuLink from "../MenuLink";

const Contact = () => {

  const StyledContactSection = styled.section`
    margin-top: 1.6rem;
    padding: 1.6rem;

    h6, a {
      margin: 6.4px 0;
      color: #000000de;
      text-decoration: none;
    }

    ul {
      display: flex;
      flex-direction: row;
    }

    li {
      margin-right: 3.2rem;
    }
  `;


  return (
    <StyledContactSection>
      <h6>Contato</h6>
      <ul>
        <li><a href="https://www.linkedin.com/in/iagobalbino/" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/iagobalbino" target="_blank">Github</a></li>
      </ul>
    </StyledContactSection>
  );
};

export default Contact;