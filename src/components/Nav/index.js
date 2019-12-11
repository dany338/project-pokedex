import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Nav = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...Nav
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
