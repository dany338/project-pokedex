import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const DetailPoke = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...DeatilPoke
      </Container>
    </ErrorBoundary>
  )
}

DetailPoke.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

DetailPoke.defaultProps = {
  props: {},
};

export default DetailPoke;
