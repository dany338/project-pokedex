import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const SignUp = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...SignUp
      </Container>
    </ErrorBoundary>
  )
}

SignUp.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

SignUp.defaultProps = {
  props: {},
};

export default SignUp;
