import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Pokedex = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...Pokedex List
      </Container>
    </ErrorBoundary>
  )
}

Pokedex.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Pokedex.defaultProps = {
  props: {},
};

export default Pokedex;
