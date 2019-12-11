import React from 'react';
import PropTypes from 'prop-types';
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Search = props => {
  return (
    <ErrorBoundary>
      <Container>
        ...Search
      </Container>
    </ErrorBoundary>
  )
}

Search.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
}

Search.defaultProps = {
  props: {},
};

export default Search;
