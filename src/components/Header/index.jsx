import styled from 'styled-components';
import device from '../Device';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2;
  list-style: none;
  padding: 8px;

  li {
    margin: 20px;
  }

  /* @media (max-width:${device.md}) {
    li {
      color: red;
    }
  } */
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