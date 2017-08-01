import React from 'react';
import { shallow } from 'enzyme';

import { Pokemons } from './Pokemons';

describe('Pokemons Page', () => {
  it('should render ', () => {
    const component = shallow(
      <Pokemons mounted={jest.fn()} pokemon={[]} />,
      );
    expect(component.text().length).toBeGreaterThan(0);
  });
});
