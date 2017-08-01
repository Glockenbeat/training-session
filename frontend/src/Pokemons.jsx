import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mounted } from './ducks/pokemon';

export class Pokemons extends Component {

  componentWillMount() {
    this.props.mounted();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h1>My favorite Pokemon</h1>
        <ul>
          {
            pokemon.map(({ name }) => <li key={name}>{name}</li>)
          }
        </ul>
      </div>
    );
  }
}

Pokemons.propTypes = {
  mounted: PropTypes.func.isRequired,
  pokemon: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
}

const mapStateToProps = ({ pokemon }) => ({ pokemon });
const mapDispatchToProps = { mounted };

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
