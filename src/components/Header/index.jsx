import styled from 'styled-components';
import MenuLink from '../MenuLink';
import { device } from '../Breakpoints';

const StyledHeader = styled.header`
  /* animation: nav-load 1s ease-in-out; */
  max-width: 33rem;
  display: flex;
  justify-content: space-between;
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

  @media (max-width:${device.sm}){
    text-align: right;
    flex-wrap: wrap;
    flex-direction: row;

    h1 {
      margin-right: 50px;
    }

    h1, li {
      font-size: 1.2rem;
    }
  }
`;

const Header = () => {

  return (
    <StyledHeader>
      <h1>
        <MenuLink to='/'>
          Iago Balbino
        </MenuLink>
      </h1>
      <nav>
        <ul>
          <li>
            <MenuLink to='/projects'>
              Projetos
            </MenuLink>
          </li>
          <li>
            <MenuLink to='/about'>
              Sobre
            </MenuLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;