import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  gap: 2;
  padding: 25.6px;

  h1 {
    color: rgba(0, 0, 0, 0.87);
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    margin-right: 3.2rem;
  }
`;

const Header = ({ name, itens }) => {

  return (
    <StyledHeader>
      <h1>{name}</h1>
      <nav>
        <ul>
          {itens.map(item => <li>{item}</li>)}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;