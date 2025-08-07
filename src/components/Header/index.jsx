import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none
`;

const Header = () => {

  return (
    <header>
      <StyledNav>
        <li>Iago Balbino</li>
        <li>Projetos</li>
        <li>Sobre</li>
      </StyledNav>
    </header>
  );
};

export default Header;