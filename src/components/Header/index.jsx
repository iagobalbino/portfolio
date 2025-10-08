import styled from 'styled-components';
import MenuLink from '../MenuLink';

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
            <MenuLink to='/social'>
              Redes Sociais
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