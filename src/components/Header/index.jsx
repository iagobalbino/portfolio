import styled from 'styled-components';
import device from '../Device';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  padding: 25.6px;

  li:first-child {
    color: rgba(0, 0, 0, 0.87);
  }

  /* @media (max-width:${device.md}) {
    li {
      color: red;
    }
  } */
`;

const Header = ({ itens }) => {

  return (
    <header>
      <StyledNav>
        {itens.map(item => <li><a>{item}</a></li>)}
      </StyledNav>
    </header>
  );
};

export default Header;