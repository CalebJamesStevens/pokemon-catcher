import React from 'react';
import { ReactDOM } from 'react';
import {
    render,
    fireEvent,
    queryByRole,
    queryByAttribute,
    getAllByRole,
} from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Inventory from './Inventory';
import { store } from '../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { testPokemon__Ditto } from '../testData';
import Navbar from './Navbar';
import CatchPokemon from './CatchPokemon';
import PokemonCard from './PokemonCard';

it('Renders page correctly', () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <CatchPokemon />
        </Provider>
    );
    expect(queryByTestId('catchPokemon')).toBeTruthy();
});
