import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inventory from './components/Inventory';
import CatchPokemon from './components/CatchPokemon';
import Navbar from './components/Navbar';

function App() {
    return (
        <section className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/catch-pokemon' element={<CatchPokemon />} />
                    <Route path='/' element={<Inventory />} />
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;
