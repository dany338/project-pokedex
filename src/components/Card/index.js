import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Card = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...App
      </Container>
    </ErrorBoundary>
  )
}

Card.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Card.defaultProps = {
  props: {},
};

export default Card;
