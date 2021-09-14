import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tchat from './Tchat';

describe('<Tchat />', () => {
  test('it should mount', () => {
    render(<Tchat />);
    
    const Tchat = screen.getByTestId('Tchat');

    expect(Tchat).toBeInTheDocument();
  });
});