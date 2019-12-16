import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { Container } from './styled';
/* Components */
import ErrorBoundary from '../components/ErrorBoundary';

const Home = props => {
  return (
    <ErrorBoundary>
      <Container className="home">
        <div className="slider" />
      </Container>
    </ErrorBoundary>
  )
}

Home.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

Home.defaultProps = {
  props: {},
};

export default Home;
