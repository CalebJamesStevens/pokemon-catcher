import React from 'react';
import { ReactDOM } from 'react';
import { render, fireEvent, queryByRole } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import Inventory from './Inventory';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { testPokemon__Ditto } from '../testData';

it('Renders correctly', () => {
    const { queryByRole } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Inventory />
            </BrowserRouter>
        </Provider>
    );

    expect(queryByRole('main')).toBeTruthy();
});
