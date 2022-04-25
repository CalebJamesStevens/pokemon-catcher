import React from 'react';
import { ReactDOM } from 'react';
import {
    render,
    fireEvent,
    queryByRole,
    queryByAttribute,
} from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import Inventory from './Inventory';
import { store } from '../redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { testPokemon__Ditto } from '../testData';
import Navbar from './Navbar';
import CatchPokemon from './CatchPokemon';

it('Renders correctly', () => {
    const { queryByTestId } = render(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/catch-pokemon' />
                <Route path='/' />
            </Routes>
        </BrowserRouter>
    );

    const inventoryMenuItem = queryByTestId('inventory__menuItem');
    const catchMenuItem = queryByTestId('catch__menuItem');

    expect(queryByTestId('navbar')).toBeTruthy();
    expect(inventoryMenuItem).toBeTruthy();
    expect(catchMenuItem).toBeTruthy();
});

it('Reroutes when clicking menu buttons', () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/catch-pokemon' element={<CatchPokemon />} />
                    <Route path='/' element={<Inventory />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );

    const inventoryMenuItem = queryByTestId('inventory__menuItem');
    const catchMenuItem = queryByTestId('catch__menuItem');

    fireEvent.click(inventoryMenuItem);
    expect(queryByTestId('inventory')).toBeTruthy();
    expect(queryByTestId('catchPokemon')).toBeFalsy();
    fireEvent.click(catchMenuItem);
    expect(queryByTestId('catchPokemon')).toBeTruthy();
    expect(queryByTestId('inventory')).toBeFalsy();
});
