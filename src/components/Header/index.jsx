import styled from 'styled-components';
import device from '../Device';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
<<<<<<< HEAD
  justify-content: space-between;
  margin: 0 12px 0 12px;
  width: 580px;
  height: 76px;

  ul li {
    display: inline-block;
    margin: 0 12px 0 12px;
  }
=======
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
>>>>>>> bb05942278df4f1e7364cbe18782e2c12ddf693a
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