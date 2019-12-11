import React from 'react'
import PropTypes from 'prop-types'
/* Style Components */
import { GlobalStyle } from './styled';
/* Pages */
import Home from "../../pages/Home";
import Coach from "../../pages/Coach";
import DetailPoke from "../../pages/DetailPoke";
import Pokedex from "../../pages/Pokedex";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/coach" exact component={Coach} />
          <Route path="/detail/:id" exact component={DetailPoke} />
          <Route path="/pokedex" exact component={Pokedex} />
          <Route exact path="/oauth/sign-in" component={SignIn} />
          <Route exact path="/oauth/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  )
}

App.propTypes = {
  props: PropTypes.oneOfType([PropTypes.object]),
};

App.defaultProps = {
  props: {},
};

export default App;
