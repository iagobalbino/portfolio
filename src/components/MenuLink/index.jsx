import { Link, useLocation } from "react-router";
import styled from "styled-components";

const StyledMenuLink = styled.div`
  .link {
    color: #00000061;
    text-decoration: none;
  }

  .clicked-link {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const MenuLink = ({ children, to }) => {
  const location = useLocation();
  console.log(location)

  return (
    <StyledMenuLink>
      <Link className={`
        ${'link'}
        ${location.pathname === to ? 'clicked-link' : ''}
      `}
        to={to}>{children}</Link>
    </StyledMenuLink>
  );
};

export default MenuLink;