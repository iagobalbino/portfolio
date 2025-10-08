import styled from "styled-components";

const Contact = ({ itens, href }) => {
  itens = ['Email', 'LinkedIn', 'Github'];
  href = ['iago_nobre@hotmail.com', 'https://www.linkedin.com/in/iagobalbino/', 'https://github.com/iagobalbino']

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
        {itens.map(
          item =>
            <li>
              <a href={href}>{item}</a>
            </li>)}
      </ul>
    </StyledContactSection>
  );
};

export default Contact;