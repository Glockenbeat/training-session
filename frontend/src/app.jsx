
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';


import reducers from './ducks';
import Contact from './ContactForm';
import Home from './Home';
import Pokemons from './Pokemons';
import './styles.css';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);


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
              to="/pokemons"
            >
              Pokemons
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
            path="/pokemons"
            component={Pokemons}
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
