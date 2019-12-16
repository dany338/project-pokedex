import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* Defined Constants */
import { theme, pxToRem } from "../../config/const";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.headerBackgrond};
  box-shadow: 0 -2px 7px -1px ${theme.colors.black};
  height: ${pxToRem(70)};
  justify-content: space-between;
  padding: ${pxToRem(16)};
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const NavItem = styled(Link)`
  border: none;
  color: ${theme.headerTextColor};
  font-weight: 300;
  padding: 0 ${pxToRem(16)};
  text-decoration: none;
  &:hover {
    color: ${theme.primaryColor};
  }
`;

export const Logo = styled.span`
  color: ${theme.headerTextColor}
  font-size: ${pxToRem(24)};
  font-weight: 600;
  &:hover {
    color: ${theme.secondaryColor};
  }
`;

export const Navigation = styled.nav`
display: flex;
padding: 0 ${pxToRem(32)};
align-items: center;
justify-items: center;
`;
