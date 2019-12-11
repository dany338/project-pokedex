import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Coach = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...Coach List
      </Container>
    </ErrorBoundary>
  )
}

Coach.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Coach.defaultProps = {
  props: {},
};


export default Coach;
