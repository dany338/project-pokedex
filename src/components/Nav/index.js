import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container, NavItem, Logo, Navigation } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Nav = props => {
  return (
    <ErrorBoundary>
      <Container>
        <NavItem to="/">
          <Logo> POKEDEX </Logo>
        </NavItem>
        <Navigation>
          <NavItem to="/oauth/sign-up"> Register Coach </NavItem>
          <NavItem to="/coach"> List of coach's </NavItem>
          <NavItem to="/pokedex"> List Pokedex </NavItem>
          <NavItem to="/oauth/sign-in"> Login Pokedex </NavItem>
        </Navigation>
      </Container>
    </ErrorBoundary>
  )
}

Nav.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Nav.defaultProps = {
  props: {},
};

export default Nav;
