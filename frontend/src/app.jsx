import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import reducers from './ducks';
import Contact from './ContactForm';
import Home from './Home';
import './styles.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul className="navigation">
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="content">
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/contact"
            component={Contact}
          />
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app-root'),
);
