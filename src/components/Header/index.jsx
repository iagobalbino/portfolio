import styled from 'styled-components';
import device from '../Device';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
<<<<<<< HEAD
  justify-content: space-between;
  gap: 20px;
=======
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
>>>>>>> 6fe33466ab0527714464860a1bb3e5dd649ac318
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
>>>>>>> bb05942278df4f1e7364cbe18782e2c12ddf693a
`;

const Header = ({ itens }) => {

  return (
<<<<<<< HEAD
    <header>
      <StyledNav>
        {itens.map(item => <li><a>{item}</a></li>)}
      </StyledNav>
    </header>
=======
    <StyledHeader>
      <h1>Iago Balbino</h1>
      <nav>
        <ul>
          <li>Projetos</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </StyledHeader>
>>>>>>> 6fe33466ab0527714464860a1bb3e5dd649ac318
  );
};

export default Header;