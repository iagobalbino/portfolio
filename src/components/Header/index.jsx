import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 12px 0 12px;
  width: 580px;
  height: 76px;

  ul li {
    display: inline-block;
    margin: 0 12px 0 12px;
  }
`;

const Header = () => {

  return (
    <StyledHeader>
      <h1>Iago Balbino</h1>
      <nav>
        <ul>
          <li>Projetos</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;